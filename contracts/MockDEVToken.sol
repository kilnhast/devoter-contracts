// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20Vote.sol";

contract MockDEVToken is ERC20Vote {
    constructor() ERC20Vote(msg.sender, "Mock DEV Token", "MDT") {
        // Contract implementation will be added in subsequent tasks
    }
}