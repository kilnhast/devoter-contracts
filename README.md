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

## Environment Variables and Security

This project uses environment variables to manage sensitive information like private keys and RPC URLs. This is a crucial security measure to prevent exposing your keys.

1.  **Create a `.env` file:**

    Make a copy of the `.env.example` file and name it `.env`:

    ```bash
    cp .env.example .env
    ```

2.  **Populate the `.env` file:**

    Open the `.env` file and add your private key and RPC URLs.

    ```
    PRIVATE_KEY=your_metamask_private_key_here
    BASE_MAINNET_RPC_URL=https://mainnet.base.org
    BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
    ANKR_API_KEY=your_ankr_key_here
    ```

    **IMPORTANT:** The `.env` file is included in `.gitignore` and should **never** be committed to version control.

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

