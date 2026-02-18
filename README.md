# Minimal NFT Minter DApp

A clean and simple NFT minting decentralized application that demonstrates how NFTs work end-to-end:

Smart Contract → Deployment → Wallet → Mint UI

This repository is intentionally flat (no folders) so beginners can easily study each file.

---

## Features

• ERC-721 compliant NFT  
• Public minting  
• Token counter  
• Wallet connection  
• Mint button UI  
• Transaction feedback  

---

## Tech Stack

- Solidity
- Hardhat
- Ethers.js
- HTML + Vanilla JS

---

## Contract Overview

Users call:

mintNFT()

Which:

1. Increments token ID
2. Mints NFT
3. Assigns ownership

---

## Setup

Install dependencies:

npm install

Compile:

npx hardhat compile

Run local node:

npx hardhat node

Deploy:

npx hardhat run deploy.js --network localhost

---

## Connect Frontend

Open:

index.html

Edit `app.js`:

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS";

---

## Learning Objectives

This repo teaches:

- NFT standards
- Contract state variables
- Web3 frontend calls
- Transaction lifecycle
- Wallet authorization

---

## Important

This project is educational and designed for:

- Local networks
- Testnets

Not production ready.

---

## License
MIT
