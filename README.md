# devoter-contracts

Custom Solidity contracts for the devoter-app, built with Hardhat.

## Project Structure

This project follows a standard Hardhat project structure:

- `contracts/`: Contains the Solidity smart contracts.
- `ignition/`: Holds the deployment scripts for Hardhat Ignition.
- `test/`: Includes the test files for the smart contracts.
- `hardhat.config.ts`: The main Hardhat configuration file.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/devoter-xyz/devoter-contracts.git
    cd devoter-contracts
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

### Available Commands

-   **Compile contracts:**

    ```bash
    pnpm hardhat compile
    ```

-   **Run tests:**

    ```bash
    pnpm hardhat test
    ```

-   **Deploy contracts (to a local network):**

    ```bash
    pnpm hardhat ignition deploy ignition/modules/Lock.ts --network localhost
    ```

