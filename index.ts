import {
  createWalletClient,
  createPublicClient,
  http,
  zeroAddress,
  Address,
  parseUnits,
  Abi,
} from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import abi from "./abi";
import cryptoWords from "./cryptowords";

dotenv.config();

// Define custom chain
const creatorChainTestnet = defineChain({
  id: 66665,
  name: "Creator Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.creatorchain.io"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.creatorchain.io" },
  },
});

// Environment variables
const privateKey = process.env.PRIVATE_KEY || "";
const contractAddress: `0x${string}` = (process.env.CONTRACT_ADDRESS ||
  "") as `0x${string}`;
const account = privateKeyToAccount(`0x${privateKey}`);

// Clients
const publicClient = createPublicClient({
  chain: creatorChainTestnet,
  transport: http(),
});

const walletClient = createWalletClient({
  account,
  chain: creatorChainTestnet,
  transport: http(),
});

// File paths
const mintedDomainsFile = path.resolve(__dirname, "mintedDomains.json");

// Initialize minted domains data
let mintedData: { domains: string[]; txHash: string; address: string }[] = [];
let totalMintedDomains = 0;
let currentDomainIndex = 0; // Track progress in the cryptoWords list

// Load data from JSON
function loadMintedData() {
  if (fs.existsSync(mintedDomainsFile)) {
    const data = JSON.parse(fs.readFileSync(mintedDomainsFile, "utf8"));
    mintedData = data.mintedData || [];
    currentDomainIndex = data.currentDomainIndex || 0;
    totalMintedDomains = mintedData.reduce(
      (acc, entry) => acc + entry.domains.length,
      0
    );
  }
}

// Save data to JSON
function saveMintedData() {
  const data = {
    mintedData,
    currentDomainIndex,
  };
  fs.writeFileSync(mintedDomainsFile, JSON.stringify(data, null, 2));
}

// Check if a domain is minted
async function isDomainMinted(domain: string): Promise<boolean> {
  try {
    const result: any = await publicClient.readContract({
      address: contractAddress,
      abi: abi,
      functionName: "registryLookupByName",
      args: [domain],
    });
    return result.owner !== zeroAddress;
  } catch (error) {
    console.error(`Error checking domain "${domain}":`, error);
    return false;
  }
}

// Get available domains
async function getAvailableDomains(count: number): Promise<string[]> {
  const availableDomains: string[] = [];
  while (
    availableDomains.length < count &&
    currentDomainIndex < cryptoWords.length
  ) {
    const word = cryptoWords[currentDomainIndex].toLowerCase();
    currentDomainIndex++;

    // Skip already processed domains
    const alreadyProcessed = mintedData.some((entry) =>
      entry.domains.includes(word)
    );
    const isMinted = await isDomainMinted(word);

    if (!alreadyProcessed && !isMinted) {
      availableDomains.push(word);
    }
  }

  // Save progress after checking domains
  saveMintedData();
  return availableDomains;
}

// Prepare calldata for minting
interface MintCalldata {
  owners: string[];
  domains: string[];
  expiration: bigint[];
  referral: string;
  credits: bigint;
}

async function prepareMintCalldata(
  domains: string[],
  address: Address
): Promise<MintCalldata> {
  return {
    owners: Array(domains.length).fill(address),
    domains: domains,
    expiration: Array(domains.length).fill(BigInt(1)),
    referral: zeroAddress,
    credits: BigInt(0),
  };
}

// Get the price to mint domains
async function getPriceToMint(domains: string[]): Promise<bigint> {
  let totalCost = BigInt(0);
  for (const domain of domains) {
    const price = await publicClient.readContract({
      address: contractAddress,
      abi: abi,
      functionName: "priceToRegister",
      args: [domain.length],
    });
    console.log(`Price to mint ${domain}: ${price}`);
    totalCost += BigInt(price.toString());
  }
  return totalCost;
}

// Fund a newly created account
async function fundAccount(newAccount: Address, amount: bigint) {
  try {
    const txHash = await walletClient.sendTransaction({
      to: newAccount,
      value: amount,
    });
    await publicClient.waitForTransactionReceipt({ hash: txHash });
    console.log(`Funded account ${newAccount} with ${amount} wei.`);
  } catch (error) {
    console.error("Error funding account:", error);
    throw error;
  }
}

// Update the mintingProcess function

// Update mintDomain function's error handling
async function mintDomain(
  domains: string[],
  address: Address,
  privateKey: Address
): Promise<string | null> {
  try {
    const wallet = createWalletClient({
      account: privateKeyToAccount(privateKey),
      chain: creatorChainTestnet,
      transport: http(),
    });

    const calldata = await prepareMintCalldata(domains, address);
    const price = await getPriceToMint(domains);

    console.log(`Attempting to mint domains with price: ${price} wei`);

    const txHash = await wallet.writeContract({
      address: contractAddress,
      abi: abi as Abi,
      functionName: "registerDomains",
      args: [
        calldata.owners,
        calldata.domains,
        calldata.expiration,
        calldata.referral,
        calldata.credits,
      ],
      value: price,
    });

    console.log(`Transaction sent: ${txHash}`);
    return txHash;
  } catch (error: any) {
    console.error("Detailed minting error:", error);
    return null;
  }
}

async function mintingProcess() {
  console.log("Starting minting process...");
  loadMintedData();

  try {
    const newPrivateKey = generatePrivateKey();
    const newAccount = privateKeyToAccount(newPrivateKey);
    console.log(`Generated new account: ${newAccount.address}`);

    const count = Math.floor(Math.random() * 2) + 1;
    let domainsToMint = await getAvailableDomains(count);

    if (domainsToMint.length === 0) {
      console.log("No available domains to mint.Stopping the process.");
      process.exit(0);
      return;
    }

    console.log(`Domains to mint: ${domainsToMint.join(", ")}`);

    // Calculate total cost with higher gas buffer
    const price = await getPriceToMint(domainsToMint);
    const gasFee = parseUnits("0.0002", 18);
    const totalRequired = price + gasFee;

    console.log(`Total required: ${totalRequired} wei`);

    // Fund account
    await fundAccount(newAccount.address, totalRequired);

    // Verify balance after funding
    const balance = await publicClient.getBalance({
      address: newAccount.address,
    });
    console.log(`Account balance after funding: ${balance} wei`);

    if (balance < totalRequired) {
      throw new Error("Insufficient balance after funding");
    }

    // Wait for 2 seconds after funding
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const txHash = await mintDomain(
      domainsToMint,
      newAccount.address,
      newPrivateKey
    );

    if (txHash) {
      // Wait for confirmation
      const receipt = await publicClient.waitForTransactionReceipt({
        hash: txHash as `0x${string}`,
        confirmations: 2, // Wait for 2 confirmations
        timeout: 60_000, // 60 second timeout
      });

      console.log(`Transaction confirmed! Status: ${receipt.status}`);
      console.log(`Total domains minted: ${totalMintedDomains}`);
    }
  } catch (error) {
    console.error("Error in minting process:", error);
  }
}

// Update the interval timing
setInterval(async () => {
  try {
    await mintingProcess();
  } catch (error) {
    console.error("Error in automated process:", error);
  }
}, 60 * 1000); // Increased to 5 seconds
