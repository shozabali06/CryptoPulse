# CryptoPulse

CryptoPulse is a modern and visually appealing website that provides data on various cryptocurrencies, including their current values, trends, and more. This project is designed as a learning exercise to explore React, Vite, and JavaScript while implementing an intuitive UI and real-world API integration.

---

## Features

- **Live Crypto Data**: Displays real-time data of cryptocurrencies fetched from the CoinGecko API.
- **Search Functionality**: Includes a search bar for users to find specific cryptocurrencies.
- **Currency Conversion**: Option to view cryptocurrency rates in USD, EUR, and PKR.
- **Good Looking UI**: A clean and user-friendly interface for easy navigation and a pleasant experience.

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shozabali06/CryptoPulse.git
   cd CryptoPulse
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env` file in the root folder of the project.
   - Add your CoinGecko API key to the `.env` file as follows:
     ```env
     VITE_API_KEY=<your_api_key>
     ```
   - You can obtain your API key by visiting [CoinGecko API](https://www.coingecko.com/en/api).

4. **Run the Project**
   ```bash
   npm run dev
   ```
   This will start the Vite development server. The app will be accessible on `localhost` (port may vary).

---

## Notes

- Check the repository description for a preview link to see the app in action.
- This project is for educational purposes and is not intended for production use.

---

Enjoy exploring cryptocurrency data with **CryptoPulse**!
