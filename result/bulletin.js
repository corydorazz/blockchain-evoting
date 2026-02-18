// ===== BLOCKCHAIN VOTING BULLETIN BOARD - UMB TOP LOGO EDITION =====

var abi = [
  {
    "inputs": [],
    "name": "candidatesCount",
    "outputs": [{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType":"uint256","name":"_id","type":"uint256"}],
    "name": "getCandidate",
    "outputs": [
      {"internalType":"uint256","name":"","type":"uint256"},
      {"internalType":"string","name":"","type":"string"},
      {"internalType":"uint256","name":"","type":"uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

var contractAddress = "0xcdeadb97b65792b43889794232f3b9d23fad51a7";
var voting = eth.contract(abi).at(contractAddress);

// Terminal Colors
var white  = "\033[1;37m"; 
var green  = "\033[32m";   
var yellow = "\033[1;33m"; 
var blue   = "\033[1;34m"; 
var red    = "\033[31m";   
var reset  = "\033[0m";

// --- 1. ASCII LOGO MERCU BUANA (DI ATAS - BIRU) ---
console.log(blue + "                      .=+...   ");
console.log(blue + "                     .=*+...   ");
console.log(blue + "                      ...=**+  ");
console.log(blue + "                      .:+***+  ");
console.log(blue + "                   .=*****+");
console.log(blue + "                 ..-*******+.... ");
console.log(blue + "                 .+********+...: ");
console.log(blue + "              ...=**********+  .+...");
console.log(blue + "              ..+***********+  .+=..");
console.log(blue + "             ....*************+...++:.....");
console.log(blue + "            ...=**************...+**-....");
console.log(blue + "         :+***=...**************+...+***=");
console.log(blue + "        +*****=  :#*#*##*#**#**#+  .+*****:");
console.log(blue + "      -*******=  :##############+  .*******+");
console.log(blue + "    ..*********=..:##############*...*********+.");
console.log(blue + "   .=**********=..:##############*...***********:");
console.log(blue + "   ************=..:##############*...************=");
console.log(blue + "  .**#*********#=  :##############* .*******#*#**#=.");
console.log(blue + "  .+#############=  :##############* .*#############:");
console.log(blue + "  :##############=..:##############*...*#############+");
console.log(blue + "  :##############=..:##############*...*#############*");
console.log(blue + "  :##############=  :%#############* .*#############*");
console.log(blue + "  :##############=  :%%%%%%%%%%%%%%* .##############*");
console.log(blue + "  :##############=..:%%%%%%%%%%%%%%*...##############*");
console.log(blue + "  :##############+..:%%%%%%%%%%%%%%*...#####%########*");
console.log(blue + "  :%%%%%%%%%%%%%%+..:%%%%%%%%%%%%%%*...#%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+. :%%%%%%%%%%%%%%* .#%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+  :%%%%%%%%%%%%%%* .#%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+..:%%%%%%%%%%%%%%*...%%%%%%%%%%%%%%#");
console.log(blue + "  -%%%%%%%%%%%%%%+..:%%%%%%%%%%%%%%*...%%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+..-%%%%%%%%%%%%%%*...#%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+  :%%%%%%%%%%%%%%* .#%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+  :%%%%%%%%%%%%%%* .#%%%%%%%%%%%%%#");
console.log(blue + "  :%%%%%%%%%%%%%%+..-%%%%%%%%%%%%%%*...#%%%%%%%%%%%%%*");
console.log(blue + "   #%%%%%%%%%%%%%+..-%%%%%%%%%%%%%%*...%%%%%%%%%%%%%%=");
console.log(blue + "   *%%%%%%%%%%%%%+..:%%%%%%%%%%%%%%*...#%%%%%%%%%%%%%:");
console.log(blue + "    .%%%%%%%%%%%%%=  :%%%%%%%%%%%%%%* .#%%%%%%%%%%%%*");
console.log(blue + "     *%%%%%%%%%%%%=  :%%%%%%%%%%%%%%* .%%%%%%%%%%%%%.");
console.log(blue + "      .#%%%%%%%%%%%+..-%%%%%%%%%%%%%%*...#%%%%%%%%%%%= ");
console.log(blue + "       :%%%%%%%%%%%+..-%%%%%%%%%%%%%%*...#%%%%%%%%%%+ ");
console.log(blue + "         #%%%%%%%%%=  :%%%%%%%%%%%%%%* .#%%%%%%%%%+");
console.log(blue + "          *%%%%%%%%+  :%%%%%%%%%%%%%%+  .#%%%%%%%%-");
console.log(blue + "           :%%%%%%%+..:%%%%%%%%%%%%%%+...%%%%%%%+");
console.log(blue + "             :#%%%%#...#%%%%%%%%%%%%%-..-%%%%%+");
console.log(blue + "                =%%%-...%%%%%%%%%%%%=...#%%#:");
console.log(blue + "                  :+: ..+%%%%%%%%#:. .*=");
console.log(blue + "                  UNIVERSITAS MERCU BUANA" + reset);
console.log("");

// --- 2. ASCII ART: BULLETIN BOARD (DI BAWAH LOGO - KUNING) ---
console.log(yellow + " $$$$$$$\\  $$\\   $$\\ $$\\       $$\\       $$$$$$$$\\ $$$$$$$$\\ $$$$$$\\ $$\\   $$\\ ");
console.log(yellow + " $$  __$$\\ $$ |  $$ |$$ |      $$ |      $$  _____|\\__$$  __|\\_$$  _|$$$\\  $$ |");
console.log(yellow + " $$ |  $$ |$$ |  $$ |$$ |      $$ |      $$ |         $$ |     $$ |  $$$$\\ $$ |");
console.log(yellow + " $$$$$$$\\ |$$ |  $$ |$$ |      $$ |      $$$$$\\       $$ |     $$ |  $$ $$\\$$ |");
console.log(yellow + " $$  __$$\\ $$ |  $$ |$$ |      $$ |      $$  __|      $$ |     $$ |  $$ \\$$$$ |");
console.log(yellow + " $$ |  $$ |$$ |  $$ |$$ |      $$ |      $$ |         $$ |     $$ |  $$ |\\$$$ |");
console.log(yellow + " $$$$$$$  |\\$$$$$$  |$$$$$$$$\\ $$$$$$$$\\ $$$$$$$$\\    $$ |   $$$$$$\\ $$ | \\$$ |");
console.log(yellow + " \\_______/  \\______/ \\________|\\________|\\________|   \\__|   \\______|\\__|  \\__|");
console.log("");
console.log(yellow + " $$$$$$$\\   $$$$$$\\   $$$$$$\\  $$$$$$$\\  $$$$$$$\\  ");
console.log(yellow + " $$  __$$\\ $$  __$$\\ $$  __$$\\ $$  __$$\\ $$  __$$\\ ");
console.log(yellow + " $$ |  $$ |$$ /  $$ |$$ /  $$ |$$ |  $$ |$$ |  $$ |");
console.log(yellow + " $$$$$$$  |$$ |  $$ |$$$$$$$$ |$$$$$$$  |$$ |  $$ |");
console.log(yellow + " $$  __$$< $$ |  $$ |$$  __$$ |$$  __$$< $$ |  $$ |");
console.log(yellow + " $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |");
console.log(yellow + " $$$$$$$  | $$$$$$  |$$ |  $$ |$$ |  $$ |$$$$$$$  |");
console.log(yellow + " \\_______/  \\______/ \\__|  \\__|\\__|  \\__|\\_______/ " + reset);

// HEADER & STATUS (FULL HIJAU)
console.log(green + "\n + -- -- +=[ Author: Capstone Team | E-Voting System ]");
console.log(green + " + -- -- +=[ Status: Public Ledger Monitoring ]\n");
console.log(green + " + -- -- +=[ ON CHAIN VOTES TALLY]\n");

console.log(red + "[!] Warning: Synchronizing with Blockchain Smart Contract...\n" + reset);

try {
    var total = voting.candidatesCount.call().toNumber();

    console.log(green + "1) Total Registered Candidates: " + total);
    console.log(green + "2) Election Result Summary:");
    
    console.log(white + "----------------------------------------------------------" + green);
    for (var i = 1; i <= total; i++) {
        var c = voting.getCandidate.call(i);
        var nameStr = c[1].toString();
        
        console.log(
            green + "  [#] ID: " + c[0] + 
            " | Name: " + nameStr.padEnd(15) + 
            " | Total Votes: " + c[2]
        );
    }
    console.log(white + "----------------------------------------------------------" + reset);

    console.log(red + "\n[W] VERIFIED DATA: SECURELY FETCHED FROM ETHEREUM" + reset);
} catch (err) {
    console.log(red + "[E] CRITICAL ERROR: Smart Contract at " + contractAddress + " not found." + reset);
}

console.log(green + "\nkat > " + reset);