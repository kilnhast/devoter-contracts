# devoter-contracts

Custom Solidity contracts for the devoter-app, built with Hardhat.

## Project Structure

This project follows a standard Hardhat project structure:

- `contracts/`: Contains the Solidity smart contracts.
- `scripts/`: Contains scripts for automating tasks and deployments.
- `test/`: Includes the test files for the smart contracts.
- `deploy/`: Contains deployment configurations.
- `ignition/`: Holds the deployment scripts for Hardhat Ignition.
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

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file
`PRIVATE_KEY`
`BASE_MAINNET_RPC_URL`
`BASE_SEPOLIA_RPC_URL`
`ANKR_API_KEY`

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
    pnpm compile
    ```

-   **Check network connection:**
    ```bash
    pnpm check-connection
    ```

-   **Run tests:**

    ```bash
    pnpm hardhat test
    ```

-   **Deploy contracts (to a local network):**

    ```bash
    pnpm hardhat ignition deploy ignition/modules/Lock.ts --network localhost
    ```

