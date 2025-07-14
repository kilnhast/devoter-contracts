// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20Vote.sol";

contract MockDEVToken is ERC20Vote {
    constructor(
        address _defaultAdmin,
        string memory _name,
        string memory _symbol
    ) ERC20Vote(_defaultAdmin, _name, _symbol) {
        // Calculate initial supply: 1,000,000 * 10^18
        uint256 initialSupply = 1000000 * 10**decimals();
        
        // Mint initial supply to default admin
        _mint(_defaultAdmin, initialSupply);
    }

    function _canMint(address _address) internal view virtual returns (bool) {
        return owner() == _address;
    }

    function mintTo(address to, uint256 amount) public override {
        require(to != address(0), "ERC20: mint to the zero address");
        require(amount > 0, "ERC20: mint amount must be greater than zero");
        require(_canMint(msg.sender), "ERC20: caller is not authorized to mint");
        _mint(to, amount);
    }

    function batchMintTo(address[] calldata to, uint256[] calldata amounts) public {
        require(to.length == amounts.length, "ERC20: arrays must have the same length");
        require(_canMint(msg.sender), "ERC20: caller is not authorized to mint");
        for (uint256 i = 0; i < to.length; i++) {
            require(to[i] != address(0), "ERC20: mint to the zero address");
            require(amounts[i] > 0, "ERC20: mint amount must be greater than zero");
            _mint(to[i], amounts[i]);
        }
    }
}