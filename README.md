# BitSwift

BitSwift is a mobile app that allows users to easily access market information about their favorite cryptocurrencies. The app provides real-time updates on cryptocurrency prices, market cap, 24-hour volume, and more. It is built using React Native, Expo, and Tamagui for a smooth and responsive user experience on both Android and iOS devices.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Yarn or npm**: While this project was initially set up using Yarn, you can also use npm. If you prefer npm, replace the Yarn commands with the equivalent npm commands (e.g., use `npm install` instead of `yarn install`).
- **CoinGecko API Key**: Obtain a CoinGecko API key and add it to your `.env` file in the project root directory.


## Features

- Real-time cryptocurrency price updates.
- View detailed information about selected cryptocurrencies.
- Responsive design optimized for both Android and iOS.
- Easy to navigate user interface.

## Installation

To get started with BitSwift, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ManuGC22/bitswift.git
   cd bitswift
   ```
2. Install the dependencies:
   ```bash
   yarn install
   ```
3. Start the development server:

```bash
  yarn start
```

4. Follow the on-screen instructions to run the app on an Android or iOS simulator, or on a physical device using the Expo Go app.

## Usage

Once the app is running:

- Home Screen: View the top cryptocurrencies by market cap, updated every 40 seconds.
- Crypto Detail View: Tap on any cryptocurrency to view more details, such as market cap, 24-hour volume, and all-time high.
- Real-Time Updates: The app will automatically refresh to provide the latest market information.

## Technologies Used

- Expo: To simplify development and deployment.
- Tamagui: For consistent styling across components.
- CoinGecko API: For fetching real-time cryptocurrency data.
- TypeScript: To add static typing to JavaScript.
- Jest: For testing (if applicable).

## API Integration

BitSwift integrates with the CoinGecko API to fetch real-time cryptocurrency data. The API key is stored in the .env file for security. The main endpoints used are:

```bash
const response = await fetch(
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&x_cg_demo_api_key=${API_KEY}`
);
```
