import {
  createWalletClient,
  createPublicClient,
  http,
  zeroAddress,
  Address,
  parseUnits,
  Abi,
  WalletClient,
} from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";
import * as dotenv from "dotenv";
import abi from "./abi";
import cryptoWords from "./cryptowords";

dotenv.config();

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

const privateKey = process.env.PRIVATE_KEY || "";
const contractAddress: `0x${string}` = (process.env.CONTRACT_ADDRESS ||
  "") as `0x${string}`;
const account = privateKeyToAccount(`0x${privateKey}`);

const publicClient = createPublicClient({
  chain: creatorChainTestnet,
  transport: http(),
});

const walletClient = createWalletClient({
  account,
  chain: creatorChainTestnet,
  transport: http(),
});

// Read contract details
async function readContract() {
  try {
    const data = await publicClient.readContract({
      address: contractAddress,
      abi: abi,
      functionName: "symbol",
      args: [],
    });
    console.log(`Contract symbol: ${data}`);
    return data;
  } catch (error) {
    console.error("Error reading contract:", error);
  }
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
async function getAvailableDomains(count: number = 2): Promise<string[]> {
  const availableDomains: string[] = [];

  for (const word of cryptoWords) {
    if (availableDomains.length >= count) break;

    const isMinted = await isDomainMinted(word);
    if (!isMinted) {
      availableDomains.push(word.toLowerCase());
    }
  }
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
    await publicClient.waitForTransactionReceipt({
      hash: txHash,
    });
    console.log(
      `Funded account ${newAccount} with ${amount} wei. TxHash: ${txHash}`
    );
  } catch (error) {
    console.error("Error funding account:", error);
    throw error;
  }
}

// Mint domains
// Mint domains using signTransaction and sendRawTransaction
async function mintDomain(
  domains: string[],
  address: Address,
  privateKey: Address
): Promise<void> {
  try {
    const wallet = createWalletClient({
      account: privateKeyToAccount(privateKey),
      chain: creatorChainTestnet,
      transport: http(),
    });

    const calldata = await prepareMintCalldata(domains, address);
    const price = await getPriceToMint(domains);

    const hash = await wallet.writeContract({
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

    const txHash = hash;

    console.log(`Transaction submitted. TxHash: ${txHash}`);

    // Wait for the transaction receipt
    await publicClient.waitForTransactionReceipt({ hash: txHash });

    console.log(
      `Domains ${domains.join(", ")} minted successfully! TxHash: ${txHash}`
    );
  } catch (error) {
    console.error("Error minting domains:", error);
  }
}


// Main execution function
(async () => {
  console.log("Starting minting process...");

  // Step 1: Create a new account
  const newPrivateKey = generatePrivateKey();
  const newAccount = privateKeyToAccount(newPrivateKey);
  console.log(`Generated new account: ${newAccount.address}`);

  // Step 2: Check required amount (price + gas)
  const availableDomains = await getAvailableDomains(2);
  if (availableDomains.length === 0) {
    console.log("No available domains to mint.");
    return;
  }
  const price = await getPriceToMint(availableDomains);
  const gasFee = parseUnits("0.02", 18); // Assuming a buffer gas fee
  const totalRequired = price + gasFee;

  console.log(`Total required for minting: ${totalRequired}`);

  // Step 3: Fund the new account
  await fundAccount(newAccount.address, totalRequired);

  // Step 4: Mint domains using the new account
  const newWalletClient = createWalletClient({
    account: newAccount,
    chain: creatorChainTestnet,
    transport: http(),
  });

  await mintDomain(availableDomains, newAccount.address, newPrivateKey);

  console.log("Minting process completed!");
})();
