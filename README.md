# Devoter Contracts 🗳️

Custom Solidity contracts for the devoter-app, built with Hardhat.

## 📁 Project Structure

This project follows a standard Hardhat project structure:

- `contracts/`: Contains the Solidity smart contracts.
- `scripts/`: Contains scripts for automating tasks and deployments.
- `test/`: Includes the test files for the smart contracts.
- `deploy/`: Contains deployment configurations.
- `ignition/`: Holds the deployment scripts for Hardhat Ignition.
- `hardhat.config.ts`: The main Hardhat configuration file.

## 🚀 Setup Instructions

### 🛠️ Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [pnpm](https://pnpm.io/)

### 📦 Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/devoter-xyz/devoter-contracts.git
    cd devoter-contracts
    ```
2. **Install dependencies:**
    ```bash
    pnpm install
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
    ```

## 📝 Available Commands

- **🛠️ Compile contracts:**
  ```bash
  pnpm compile
  ```
- **🧪 Run tests:**
  ```bash
  pnpm test
  ```
- **⛽ Run tests with gas reporting:**
  ```bash
  pnpm test:gas
  ```
- **🚀 Deploy to Base Sepolia testnet:**
  ```bash
  pnpm deploy:sepolia
  ```
- **🚀 Deploy to Base Mainnet:**
  ```bash
  pnpm deploy:mainnet
  ```
- **🔍 Verify contract on Base Sepolia:**
  ```bash
  pnpm verify
  ```
- **🧹 Clean build artifacts:**
  ```bash
  pnpm clean
  ```
- **🖧 Start local Hardhat node:**
  ```bash
  pnpm node
  ```
- **🌐 Check network connection:**
  ```bash
  pnpm check-connection
  ```

## 🔄 Development Workflow

1. **Install dependencies and set up environment variables** as described above.
2. **🛠️ Compile contracts** after making changes:
    ```bash
    pnpm compile
    ```
3. **🧪 Write and run tests** in the `test/` directory:
    ```bash
    pnpm test
    # or with gas reporting
    pnpm test:gas
    ```
4. **🚀 Deploy contracts** to your desired network:
    - For Base Sepolia:
      ```bash
      pnpm deploy:sepolia
      ```
    - For Base Mainnet:
      ```bash
      pnpm deploy:mainnet
      ```
5. **🔍 Verify contracts** (after deployment):
    ```bash
    pnpm verify
    ```
6. **🖧 Start a local node** for local development:
    ```bash
    pnpm node
    ```
7. **🧹 Clean build artifacts** when needed:
    ```bash
    pnpm clean
    ```

---

**Note:** This project uses `pnpm` as the package manager.

