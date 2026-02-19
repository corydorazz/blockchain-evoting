# Hybrid Blockchain E-Voting System with AES-256 and PoA (Clique)

## 📌 Overview

This project implements a **private Ethereum-based blockchain voting system** using a 10-node Geth network simulation with **Proof of Authority (PoA - Clique consensus)**.

The system adopts a hybrid architecture where:
- Vote transactions are stored **on-chain**
- Supporting application data is managed **off-chain**
- Vote data is encrypted using **AES-256** before submission to the blockchain

The goal of this project is to enhance **confidentiality, integrity, and immutability** in electronic voting systems.

---

## 🎯 Objectives

- Build a private Ethereum network using Geth
- Implement PoA (Clique) consensus for controlled validator authority
- Secure votes using AES-256 encryption
- Ensure tamper-resistant vote storage
- Simulate a 10-node blockchain environment

---

## 🏗 System Architecture

The system consists of three major layers:

### 1️⃣ Application Layer
- Voting Web Application
- Admin (Election Authority)
- Web3 integration for blockchain communication

### 2️⃣ Off-Chain Layer
- Database (non-critical metadata storage)

### 3️⃣ On-Chain Layer
- Private Ethereum Network (Geth)
- 10 Nodes (Node1–Node10)
- Node1 acts as initial sealer
- PoA (Clique) consensus mechanism
- Smart Contract (`voting.sol`)

---

## 🖼 Architecture Diagram

<img width="1408" height="1056" alt="Architecture Diagram" src="https://github.com/user-attachments/assets/4223ff43-7f5f-4db1-b1c2-ee52aa156eb3" />

> The voting request flows from the web application through Web3 to the private blockchain network.  
> Encrypted votes are validated by PoA authority nodes and permanently stored on-chain.

---

## 📂 Project Structure

blockchain-evoting/
│
├── node1 - node10/ # Geth node data directories
├── artifacts/ # Compiled smart contract files
├── genesis.json # Custom blockchain configuration (PoA Clique)
├── voting.sol # Smart contract implementation
├── setup.bat # Network initialization script
├── start_all.bat # Start all 10 nodes
├── show_results.js # Display voting results
├── show_results.bat # Execute result script
└── .gitignore


---

## ⚙ Consensus Mechanism

This project uses:

**Proof of Authority (PoA) - Clique**

Why PoA?
- Suitable for private networks
- Faster block confirmation
- Controlled validator authority
- Energy-efficient (no mining competition)

Node1 is configured as the initial sealer.

---

## 🚀 How to Run

### 1️⃣ Initialize the blockchain network
setup.bat


### 2️⃣ Start all nodes
start_all.bat


### 3️⃣ Deploy the smart contract
Deploy `voting.sol` using Remix or CLI.

### 4️⃣ View voting results
show_results.bat


---

## 🔐 Security Features

- AES-256 encryption before blockchain submission
- Immutable vote storage on private Ethereum chain
- Decentralized validation via PoA
- Tamper-resistant transaction logging

---

## 🧪 Network Configuration

- Total Nodes: 10
- Consensus: Clique (PoA)
- Private Chain ID: (define if needed)
- Custom genesis configuration

---

## 💡 Key Contributions

- Hybrid on-chain/off-chain voting architecture
- AES-256 + Blockchain integration
- Multi-node PoA network simulation
- Automation via batch scripts
- Academic-ready blockchain experiment setup

---

## 📖 Technologies Used

- Geth (Go Ethereum)
- Solidity
- Web3.js
- JavaScript
- Batch scripting
- AES-256 cryptography

---

## 📌 Future Improvements

- Dockerized multi-node deployment
- REST API backend integration
- Frontend UI enhancement
- Advanced key management
- Formal security evaluation

---

<img width="956" height="476" alt="node 1-10 ss" src="https://github.com/user-attachments/assets/3335b52a-0784-4c2c-92ad-dc16b7cbb676" />

<img width="531" height="468" alt="Bulletin Board" src="https://github.com/user-attachments/assets/5125d702-5e47-4849-966b-e0b7339a62dc" />


