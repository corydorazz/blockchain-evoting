console.log("==================================");
console.log(" BLOCKCHAIN VOTING BULLETIN BOARD ");
console.log("==================================");

var abi = [
  {
    "inputs": [],
    "name": "candidatesCount",
    "outputs": [{"type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"name": "_id", "type": "uint256"}],
    "name": "getCandidate",
    "outputs": [
      {"type": "uint256"},
      {"type": "string"},
      {"type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

var contractAddress = "0xcdeadb97b65792b43889794232f3b9d23fad51a7";
eth.defaultAccount = eth.accounts[0];

var voting = eth.contract(abi).at(contractAddress);

var count = voting.candidatesCount.call();

console.log("Jumlah Kandidat:", count.toString());
console.log("----------------------------------");

for (var i = 1; i <= count; i++) {
  var c = voting.getCandidate.call(i);
  console.log(
    "ID:", c[0].toString(),
    "| Nama:", c[1],
    "| Suara:", c[2].toString()
  );
}

console.log("----------------------------------");
console.log(" DATA DIAMBIL LANGSUNG DARI BLOCKCHAIN ");
console.log("----------------------------------");
