// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ORINFTCollection is
	ERC721,
	ERC721Enumerable,
	ERC721URIStorage,
	ERC721Burnable,
	Ownable
{
	using Counters for Counters.Counter;

	Counters.Counter private _tokenIdCounter;
	bool public isPublicMintEnabled;

	constructor() ERC721("ORI NFT collection", "ORI") {
		isPublicMintEnabled = true;
	}

	function _baseURI() internal pure override returns (string memory) {
		return "https://ori.infura-ipfs.io/ipfs/";
	}

	function safeMint(address to, string memory uri) public onlyOwner {
		require((bytes(uri).length > 0), "uri is required");
		uint256 tokenId = _tokenIdCounter.current();
		_tokenIdCounter.increment();
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
	}

	function setPublicMintEnabled(bool value) public onlyOwner {
		require(
			value != isPublicMintEnabled,
			"PublicMint switcher already has this value"
		);
		isPublicMintEnabled = value;
	}

	function mint(string memory uri) external {
		require(isPublicMintEnabled, "PublicMint is disabled");
		require((bytes(uri).length > 0), "uri is required");
		uint256 tokenId = _tokenIdCounter.current();
		_tokenIdCounter.increment();
		_safeMint(msg.sender, tokenId);
		_setTokenURI(tokenId, uri);
	}

	// The following functions are overrides required by Solidity.

	function _beforeTokenTransfer(
		address from,
		address to,
		uint256 tokenId
	) internal override(ERC721, ERC721Enumerable) {
		super._beforeTokenTransfer(from, to, tokenId);
	}

	function _burn(uint256 tokenId)
		internal
		override(ERC721, ERC721URIStorage)
	{
		super._burn(tokenId);
	}

	function tokenURI(uint256 tokenId)
		public
		view
		override(ERC721, ERC721URIStorage)
		returns (string memory)
	{
		return super.tokenURI(tokenId);
	}

	function supportsInterface(bytes4 interfaceId)
		public
		view
		override(ERC721, ERC721Enumerable)
		returns (bool)
	{
		return super.supportsInterface(interfaceId);
	}
}
