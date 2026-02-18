const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS";

const ABI = [
  "function mintNFT() external",
  "function totalSupply() view returns(uint256)"
];

let provider;
let signer;
let contract;

const statusEl = document.getElementById("status");

document.getElementById("connect").onclick = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();

  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  statusEl.innerText = "Wallet Connected";
};

document.getElementById("mint").onclick = async () => {
  try {
    const tx = await contract.mintNFT();
    statusEl.innerText = "Minting...";
    await tx.wait();
    statusEl.innerText = "NFT Minted!";
  } catch (err) {
    statusEl.innerText = err.reason || err.message;
  }
};
