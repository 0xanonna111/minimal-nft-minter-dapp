// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyNFT {

    string public name = "Minimal NFT";
    string public symbol = "MNFT";

    uint256 public totalSupply;
    mapping(uint256 => address) public ownerOf;
    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    function mintNFT() external {
        totalSupply++;

        uint256 tokenId = totalSupply;

        ownerOf[tokenId] = msg.sender;
        balanceOf[msg.sender]++;

        emit Transfer(address(0), msg.sender, tokenId);
    }
}
