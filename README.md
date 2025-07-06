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

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/devoter-xyz/devoter-contracts.git
    cd devoter-contracts
    ```
2. **Install dependencies:**
    ```bash
    pnpm install
    # or
    npm install
    ```
3. **Copy environment variables template:**
    ```bash
    cp .env.example .env
    ```
4. **Configure environment variables:**
    - Edit `.env` and fill in your `PRIVATE_KEY`, `BASE_MAINNET_RPC_URL`, `BASE_SEPOLIA_RPC_URL`, and `ANKR_API_KEY`.

5. **Test setup:**
    ```bash
    pnpm compile
    # or
    npm run compile
    ```

## Available Commands

- **Compile contracts:**
  ```bash
  pnpm compile
  # or
  npm run compile
  ```
- **Run tests:**
  ```bash
  pnpm test
  # or
  npm test
  ```
- **Run tests with gas reporting:**
  ```bash
  pnpm test:gas
  # or
  npm run test:gas
  ```
- **Deploy to Base Sepolia testnet:**
  ```bash
  pnpm deploy:sepolia
  # or
  npm run deploy:sepolia
  ```
- **Deploy to Base Mainnet:**
  ```bash
  pnpm deploy:mainnet
  # or
  npm run deploy:mainnet
  ```
- **Verify contract on Base Sepolia:**
  ```bash
  pnpm verify
  # or
  npm run verify
  ```
- **Clean build artifacts:**
  ```bash
  pnpm clean
  # or
  npm run clean
  ```
- **Start local Hardhat node:**
  ```bash
  pnpm node
  # or
  npm run node
  ```
- **Check network connection:**
  ```bash
  pnpm check-connection
  # or
  npm run check-connection
  ```

## Development Workflow

1. **Install dependencies and set up environment variables** as described above.
2. **Compile contracts** after making changes:
    ```bash
    npm run compile
    ```
3. **Write and run tests** in the `test/` directory:
    ```bash
    npm test
    # or with gas reporting
    npm run test:gas
    ```
4. **Deploy contracts** to your desired network:
    - For Base Sepolia:
      ```bash
      npm run deploy:sepolia
      ```
    - For Base Mainnet:
      ```bash
      npm run deploy:mainnet
      ```
5. **Verify contracts** (after deployment):
    ```bash
    npm run verify
    ```
6. **Start a local node** for local development:
    ```bash
    npm run node
    ```
7. **Clean build artifacts** when needed:
    ```bash
    npm run clean
    ```

---

**Note:** All scripts support both `npm` and `pnpm` as package managers.

