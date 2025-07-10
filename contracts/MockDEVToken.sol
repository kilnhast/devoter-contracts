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
}