// ===== BLOCKCHAIN VOTING BULLETIN BOARD (LIVE + COUNTDOWN) =====

// --- CONFIG ---
var REFRESH_INTERVAL = 10; // seconds

// --- ABI ---
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

// --- CONTRACT ---
var contractAddress = "0xcdeadb97b65792b43889794232f3b9d23fad51a7";
var voting = eth.contract(abi).at(contractAddress);

// --- COLORS ---
var green  = "\033[32m";
var yellow = "\033[1;33m";
var cyan   = "\033[36m";
var red    = "\033[31m";
var reset  = "\033[0m";

// --- STATE ---
var counter = REFRESH_INTERVAL;

// --- CLEAR SCREEN ---
function clearScreen() {
  console.log("\033[2J\033[H"); // ANSI clear
}

// --- RENDER BOARD ---
function renderBoard() {
  clearScreen();

  var now = new Date();
  var timeStr = now.toLocaleTimeString();

  console.log(cyan + "==============================================");
  console.log("   BLOCKCHAIN VOTING BULLETIN BOARD (LIVE)");
  console.log("==============================================");
  console.log(" Network  : Private Ethereum (Geth)");
  console.log(" Source   : Smart Contract (On-Chain)");
  console.log(" Refresh  : Every " + REFRESH_INTERVAL + " seconds");
  console.log(" Next     : " + counter + " seconds");
  console.log("==============================================" + reset);
  console.log("");

  try {
    var total = voting.candidatesCount.call().toNumber();
    console.log(green + "Total Candidates: " + total);
    console.log("----------------------------------------------");

    for (var i = 1; i <= total; i++) {
      var c = voting.getCandidate.call(i);
      var name = c[1].toString().padEnd(22);
      console.log(
        " ID: " + c[0] +
        " | Name: " + name +
        " | Votes: " + c[2]
      );
    }

    console.log("----------------------------------------------");
    console.log(" Data fetched directly from Blockchain");
    console.log(" Last Update: " + timeStr + reset);

  } catch (e) {
    console.log(red + "[ERROR] Unable to read smart contract" + reset);
  }
}

// --- COUNTDOWN LOOP ---
setInterval(function () {
  counter--;

  if (counter <= 0) {
    counter = REFRESH_INTERVAL;
  }

  renderBoard();
}, 1000);

// FIRST RUN
renderBoard();
