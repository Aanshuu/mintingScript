const cryptoWords = [
  // "Satosho", "Hashkin","Tokuna", "Defera", "Mintify", "Webnova", "Dexara", "Gasuno",
  // "Zerofy", "Lunara", "Solanae", "Polynex", "Binoria", "Cryptin", "Chainic", "Hexoro", "Noncey",
  // "Hashica", "Stakina", "Tokenzo", "Ledgeric", "Warped", "Mintro", "DAOify", "DeFinity",

  // "Vaultix", "Ethina", "Metarix", "Hedgera", "Stakuno", "Dappio", "Chainfi", "Ziluna",
  // "Neonex", "Lavinia", "Bitory", "Ethonic", "Mintra", "Crypit", "Tokemo", "Blockify",
  // "Decentix", "Walleto", "Gasify", "Mintera", "Swoply", "Webtix", "Chainoro", "Cryptix",
  // "Metaina", "Ethoro", "Solara", "Hashino", "Noncify", "Stakify", "Vaultra", "Dappify",

  // "Sensei", "Waifu", "Kitsune", "Nekocha", "Rengoku", "Chisana", "Sakura", "Akira",
  // "Tenshi", "Shiroko", "Hinata", "Aizawa", "Tanaka", "Kaminari", "Todoroki", "Kenji",
  // "Hikari", "Naruto", "Sasuke", "Itachi", "Haruko", "Mizuki", "Kaede", "Hanako",
  // "Yamato", "Makoto", "Aoi", "Kaito", "Reika", "Souta", "Kuroko", "Rika", "Sora",
  // "Nagisa", "Shizuka", "Yukari", "Meiko", "Yuzuki", "Issei", "Tsubaki", "Renji",
  // "Chihiro", "Naoki", "Haru", "Natsuki", "Tatsuki", "Emi", "Katsuki", "Yuki", "Fujita",
  // "Maki", "Kaoru", "Tetsuya", "Nobara", "Ryuu", "Eri", "Shinya", "Ryouko", "Masaki",

  // "Dave", "Jack", "John", "Liam", "Emma", "Sophia", "Oliver", "Mia", "Ethan",
  // "Ava", "Lucas", "Charlotte", "Noah", "Amelia", "Mason", "Emily", "Henry",
  // "Ella", "James", "Lily", "Logan", "Hannah", "Jacob", "Zoey", "Michael",
  // "Grace", "Elijah", "Samantha", "Benjamin", "Victoria", "Daniel", "Nora",
  // "Matthew", "Scarlett", "Aiden", "Aria", "Andrew", "Chloe", "Caleb", "Layla",
  // "David", "Lillian", "Joseph", "Zoe", "William", "Natalie", "Samuel", "Penelope",

  // "Doge", "Hehe", "Lambo", "Apefy", "Degeno", "Moonix", "Fudly", "Ruggy", "Wagmi",
  // "Shillix", "Fudora", "Wenmo", "Simpra", "Dejuna", "Hodlin", "Shibra", "Pumpix",
  // "WenLuna", "Wenmoon", "Lunaric", "Moonra", "Hodlera", "Shillra", "Fomozo",
  // "Moonica", "Pumpify", "Shiluno", "Rugzora", "Fuddera", "Moonino", "Degonic",
  // "Wagmify", "Wenno", "Hodlix", "Fudnoc", "Shillae", "Pumpka", "Ruggit", "Wenora",
  // "Degonix", "Rugmo", "Pumply", "Moonry", "Shillify", "Fomify", "Wenify", "Pumpana",
  // "Shilluna", "Wenra", "Degana", "Ruggify", "Hodlina", "Shiboru"
  // "Chainora", "Cryptova", "Hashlite", "Bitwave", 


  // "Staxify", "Ethora", "Tokinova", "Mintara", "Dexonic",
  // "Chainmax", "Blokova", "Hashuno", "Cryptania", "Stakera", "Bitrise", "Ledgera", "Ethonia", "Gasorix",
  // "Chainesis", "Hexnova", "Blockana", "Tokenite", "Crypture", "Hashify", "Bloclyn", "Chainesis", "Staknova",
  // "Bitzora", "Mintonic", "Dexnity", "Cryptexa", "Blokify", "Hashonic", "Stakuno", "Cryptaro", "Bitnify",
  // "Mintosia", "Chainero", "Gasorix", "Etharix",

  // "Lunaris", "Soluno", "Nezora", "Auroraex", "Polara", "Novara", "Stelluna", "Ethera", "Zilara",
  // "Lumenic", "Solasta", "Moonlite", "Nebulon", "Cosmosi", "Orbitix", "Lunarro", "Staraine", "Cometra",
  // "Solsticey", "Astraic",

  // "Hoshino", "Miruno", "Sakurae", "Tensha", "Kurohana", "Yuzara", "Hinakoi", "Akasune", "Hanarix",
  // "Kaorumi", "Aotama", "Mitsuno", "Shiranai", "Hoshira", "Kamiria", "Narutix", "Itachira", "Sasukori",
  // "Todokai", "Harukino",

  // "Pumpira", "Ruglina", "Wagmor", "Fudsy", "Degorix", "Moonizo", "Shillina", "Hodlexa", "Wenify",
  // "Pumpora", "Fomozo", "Shibify", "Rugonic", "Hodlify", "Shillume", "Wagmani", "Wenlix", "Degoria",
  // "Fudorix", "Pumpnoa",

  // "Vaultro", "Gasnoid", "Dexalia", "Blocara", "Ethluma", "Tokazura", "Zeronix", "Gasnova", "Cryptane",
  // "Tokenra", "Chainify", "Blockera", "Ethonea", "Stakenix", "Gasifyra", "Lunoria", "Solnova", "Hexpure",
  // "Nebulina", "Orbitara",

  // "Crypstra", "Astrole", "Ethereo", "Neonify", "Zeroma", "Bloket", "Mintola", "Dexion", "Vaulten",
  // "Gasorin", "Hashura", "Stakune", "Ethonyx", "Blokiris", "Chainua", "Cryptlyn", "Ledgora", "Tokirix",
  // "Bitronix", "Ethorion",

  // "Zenixa", "Blokith", "Gasity", "Mintrova", "Ledgron", "Astroya", "Hexusy", "Gasmint", "Chainaix",
  // "Vaultus", "Ethrify", "Cryptune", "Hashika", "Dexaro", "Tokenix", "Blokium", "Vaultify", "Stakarix",
  // "Crypoid", "Moonoric",

  // "Etherion", "Astrexa", "Cryptorix", "Nebulify", "Lunoric", "Orbitify", "Dexnova", "Chainlite", "Gasunoir",
  // "Zeronic", "Ethionix", "Bitnara", "Tokivic", "Mintiv", "Stakoro", "Blokence", "Cryptoric", "Hashion",
  // "Luminara", "Solitea",

  // "Webtro", "Vaultrix", "Solareon", "Astranic", "Hedgron", "Tokax", "Wagmuni", "Pumpora", "Fomira",
  // "Shibaro", "Hodloric", "Rugera", "Stakify", "Tokomint", "Cryptarix", "Hedgrify", "Hashiona", "Blockora",
  // "Solafix", "Etherino",

  // "Chainyx", "Blokaze", "Cryptovia", "Hashloop", "Bitroni", "Staxium", "Ethovix", "Mintoria", "Dexery",
  // "Chainuma", "Blokiro", "Cryptaze", "Hashoria", "Stakena", "Bitvore", "Ledgerix", "Gasenko", "Mintaza",

  // "Solviora", "Lunoxia", "Zilumic", "Polano", "Aurivix", "Nezoran", "Stellaris", "Cometox", "Neborix",
  // "Solrune", "Cosmorra", "Astraia", "Starion", "Orbitune", "Lumenova", "Moonixa", "Nebulyn", "Starkon",

  // "Tenshara", "Akenoix", "Hoshika", "Sakurix", "Yuzane", "Kaoruki", "Kurozon", "Hinashu", "Naruko",
  // "Akasuri", "Hoshoni", "Kamirika", "Aorano", "Sasukari", "Shinaro", "Mitsuji", "Hinanori", "Todokira",

  // "Shillura", "Pumplyx", "Degoson", "Fudora", "Rugnota", "Moonifyx", "Wagmite", "Hodlito", "Fomory",
  // "Shibero", "Pumpnix", "Wenfox", "Degonity", "Ruglira", "Moonsonic", "Hodlino", "Wenotic", "Fudnova",

  // "Blokiry", "Gasityx", "Ethrox", "Cryptrum", "Stakory", "Dexara", "Ledgify", "Vaultive", "Chainerix",
  // "Cryptela", "Hashrino", "Stakenox", "Gasnova", "Blokento", "Mintorix", "Cryplena", "Bitnaro", "Ethorix",

  // "Nebuvix", "Astreon", "Cryptenor", "Lunorix", "Orbitera", "Solryx", "Vaultion", "Hexinova", "Mintara",
  // "Bloknix", "Chainova", "Gastrix", "Cryplana", "Hedronix", "Solania", "Nebulium", "Orbitera", "Luminix",

  // "Wagmify", "Pumpiona", "Shilnova", "Tokarix", "Hodloro", "Degozon", "Rugnium", "Fudlarix", "Mintizo",
  // "Vaultura", "Gasnaro", "Chainflo", "Stakena", "Cryptivo", "Dexenty", "Bloklynx", "Hashonic", "Ledgerion",

  // "Chainara", "Bloknor", "Cryptolia", "Hashflux", "Bitrona", "Staxila", "Etharix", "Mintovo", "Dexial",
  // "Chainoxy", "Blokyna", "Cryptory", "Hashuno", "Stakaro", "Bitnava", "Ledgeron", "Gasmino", "Mintavo",

  // "Lunero", "Solnix", "Ziloria", "Aurorix", "Polyno", "Nezumi", "Cosmara", "Starixa", "Nebulara",
  // "Asteron", "Lumenix", "Orbitara", "Solvix", "Cometry", "Lunara", "Stellivo", "Solaris", "Moonara",

  // "Hoshika", "Miruma", "Akisuto", "Narutoji", "Itarina", "Tenshio", "Kaorix", "Kumino", "Akasuna",
  // "Sakurina", "Hinanori", "Kamiko", "Shirano", "Yuzora", "Kaorumi", "Hoshina", "Mitsura", "Kuronai",

  // "Shibura", "Rugzone", "Pumpzio", "Degax", "Fudara", "Moonova", "Wagmora", "Hodliva", "Fomino",
  // "Shillex", "Ruggora", "Pumpine", "Degonica", "Wenova", "Hodlara", "Shibiro", "Mooniko", "Fudlory",

  // "Blokavo", "Ethara", "Cryptova", "Gasarix", "Mintena", "Staxero", "Dexovo", "Vaultina", "Chainova",
  // "Hashura", "Bitovio", "Gasovix", "Cryplena", "Ethlina", "Chainify", "Blokaro", "Dexityx", "Vaultory",

  // "Asterix", "Nebulos", "Luminox", "Orbitra", "Solnior", "Crypthia", "Stakiro", "Hexovix", "Gasiflux",
  // "Crypxia", "Blokion", "Mintrova", "Dexonix", "Nebulae", "Hedrica", "Staklynx", "Vaultica", "Soltrix",

  // "Ruglore", "Fudnix", "Wenrify", "Pumpilo", "Shillova", "Degolio", "Hodlona", "Vaultaro", "Mintova",
  // "Blokenix", "Chainify", "Stakizo", "Gasnior", "Ethario", "Ledgera", "Cryptaro", "Dexino", "Bitarix",

  // "Satoshex", "Hashora", "Tokara", "Deforix", "Mintora", "Weblume", "Dexono", "Gasuna",
  // "Zerolia", "Lunoro", "Solnira", "Polynix", "Binorix", "Cryptinix", "Chainos", "Hexium",
  // "Noncifyx", "Stakuno", "Tokenium", "Ledgonic", "Warpify", "Mintizo", "DAOflux", "Defarix",

  // "Vaultron", "Ethnova", "Metarion", "Hedgera", "Stakion", "Dappura", "Chainizo", "Zilano",
  // "Neonica", "Lavora", "Bituno", "Ethonix", "Minarix", "Crypgen", "Toknaro", "Blokuno",
  // "Decenova", "Walletic", "Gasuro", "Mintira", "Swopara", "Webaix", "Chaintix", "Cryptano",
  // "Metoria", "Ethlume", "Solarix", "Hashuna", "Noncura", "Stakior", "Vaultifyx", "Dappizo",

  // "Senseko", "Waijiro", "Kitsumo", "Nekari", "Renkai", "Chirasu", "Sakuro", "Akinori",
  // "Tensuna", "Shimizu", "Hiraki", "Aizuma", "Tanari", "Kamiru", "Todoro", "Kenriko",
  // "Harano", "Mizumi", "Kaezora", "Hanuma", "Yamari", "Makura", "Aonari", "Kaizumi",
  // "Reinao", "Soutano", "Kuroshi", "Rikame", "Sorani", "Nagiro", "Shitoka", "Yukira",
  // "Meichu", "Yuziri", "Issato", "Tsubaka", "Renjo", "Chiora", "Naomina", "Harusa",
  // "Natsura", "Tatsuno", "Emira", "Katsumi", "Yugiri", "Fujiro", "Makiyo", "Kaotaki",
  // "Tetsuo", "Nobari", "Ryuzuki", "Eritu", "Shireko", "Ryomaru", "Masakiya",

  // "Elina", "Jazmin", "Tessa", "Dylan", "Adele", "Bryce", "Iantha", "Kyler", "Poppy",
  // "Raven", "Nova", "Laila", "Gavin", "Lacy", "Jonas", "Axel", "Troy", "Isla", "Celeste",
  // "Beck", "Otto", "Erin", "Faye", "Nina", "Kobe", "Mira", "Adia", "Ivy", "Quinn", "Arlo",
  // "River", "Hale", "Dean", "Flynn", "Skye", "Zane", "Reid", "Tara", "Finn",

  // "Dojera", "Loleno", "Lamboid", "Apenix", "Degix", "Moonifyx", "Fudnor", "Rugric", "Wenoro",
  // "Shilluna", "Fomoro", "Pumpiz", "Wenlora", "Hodlano", "Shibluno", "Pumpdex", "Rugunio",
  // "Wenura", "Degirix", "Fudari", "Moonivi", "Pumporo", "Shillano", "Degonix", "Rugfino",
  // "Weniori", "Hodleno", "Fudoraix", "Pumptri", "Moonari", "Shillora", "Rugeria",

  // "Lunorix", "Astrola", "Nebulari", "Cosmiron", "Orbinix", "Starrion", "Cometixa", "Zilanoix",
  // "Neorix", "Aurinova", "Solorix", "Orbitra", "Luminor", "Astrarex", "Solanius", "Nebulinix",
  // "Astrolux", "Orbitara", "Cosmotix", "Lunavix", "Polaron", "Novanix", "Etherlux", "Zilurix",
  // "Starova", "Neburix", "Lunarisx", "Auriora", "Cometrix", "Solinor", "Astoriax", "Orbionix",

  // "Vaultena", "Gastonix", "Cryptra", "Blokina", "Mintura", "Stakifyra", "Dexoma", "Hashonix",
  // "Chainoix", "Gasorona", "Mintraix", "Cryperio", "Bitanix", "Ethanius", "Solurex", "Lunarion",
  // "Hedrionix", "Cryplina", "Vaultrio", "Dexarix", "Gasivix", "Blokira", "Chainovaix", "Cryptoro",

  // "Blossira", "Petalix", "Leafina", "Bloomora", "Rosena", "Florine", "Meadowix", "Frostar",
  // "Sunlora", "Lavitix", "Oakova", "Pineira", "Streamax", "Rivenix", "Aurorix", "Selenaix",
  // "Meadowra", "Glaciorix", "Plumora", "Willorix", "Lakenix", "Basinor", "Havenix", "Tropinix",

  // "Glintar", "Flarion", "Stormix", "Shadowra", "Phasix", "Prismor", "Axionix", "Velorix",
  // "Zentrix", "Lumorix", "Quasira", "Vortexa", "Ignivix", "Blazura", "Zonara", "Pulseona",
  // "Shiftix", "Veluna", "Flarix", "Horizonix", "Spectra", "Stratonix", "Lyricon", "Infirix",

  // "Bitnova", "Cryptura", "Mintora", "Vaultify", "Gasifyx", "Ethunio", "Hexara", "Bloczen", 
  // "Tokenio", "Chainova", "Stakory", "Hashlux", "Etharic", "Decentra", "Vaultino", "Gasnova", 
  // "Blokino", "Mintune", "Cryplix", "Ledgoro", "Chainyx", "Ethlory", "Hashiro", "Blokify", 

  // "Nebulix", "Orbitra", "Lunaxio", "Stellara", "Solvion", "Astrofio", "Cometra", "Lumenor", 
  // "Zeroneo", "Polyris", "Cosmova", "Starune", "Astraxo", "Moonex", "Novora", "Orbitune", 
  // "Lunovia", "Solarix", "Stellino", "Nebulara", "Astronix", "Cosmora", "Solunio", "Moonari", 

  // "Akiruna", "Tenshio", "Kitsuro", "Hinakoi", "Sakurix", "Hoshira", "Kaminoe", "Aokiro", 
  // "Mitsura", "Shinari", "Kuroshi", "Narunoi", "Sasurai", "Todakai", "Harukyo", "Tenshiro", 
  // "Hikarix", "Ryoumi", "Fujika", "Kaoriko", "Shizano", "Hinakae", "Yamino", "Makiru", 

  // "Rugify", "Wagmio", "Moonero", "Shillix", "Degoro", "Fomozo", "Pumporo", "Hodlen", 
  // "Wagmify", "Fudario", "Shibuno", "Degory", "Rugnova", "Pumpino", "Wenmor", "Shillari", 
  // "Moonari", "Fudlix", "Degonos", "Wenric", "Rugmoa", "Fudario", "Wagmor", "Moonina", 

  // "Finora", "Webino", "Dataxo", "Codefy", "Dappica", "Nodevo", "Scriptor", "Hashena", 
  // "Devona", "Syntara", "Mintrex", "Infisys", "Algozo", "Techuno", "Codeoro", "Innovix", 
  // "Blokron", "Vaultrex", "Cryptino", "Hashera", "Stakify", "Dexuno", "Finityx", 
  "Nodefy",
];
export default cryptoWords;
