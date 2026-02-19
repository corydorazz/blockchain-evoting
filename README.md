📌 Overview

This project implements a private Ethereum-based blockchain voting system using a 10-node Geth network simulation.
Votes are encrypted using AES-256 before being submitted to the blockchain to ensure confidentiality and integrity using PoA consensus.

🏗 Architecture

Private Ethereum Network (Geth)

10 Validator Nodes

Custom genesis.json

Solidity Smart Contract (voting.sol)

JavaScript result parser

Batch automation scripts

📂 Project Structure

node1 - node10 → Geth nodes

genesis.json → Custom blockchain configuration

voting.sol → Smart contract

artifacts/ → Compiled contract files

setup.bat → Network initialization

start_all.bat → Start all nodes

show_results.js → Display vote results

🚀 How to Run

Initialize nodes:

setup.bat


Start all nodes:

start_all.bat


Deploy smart contract

Run:

show_results.bat

🔐 Security Features

AES-256 encryption before transaction submission

Decentralized validation

Immutable vote storage


ARCHITECTURE DIAGRAM:

<img width="1408" height="1056" alt="Architecture Diagram" src="https://github.com/user-attachments/assets/4223ff43-7f5f-4db1-b1c2-ee52aa156eb3" />
