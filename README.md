# Portfolio Management API

A RESTful API built with Node.js, Express, and MongoDB for managing investment portfolios, stocks, and transactions.

## Features

- **Portfolio Management**: Create, read, update, and delete investment portfolios
- **Stock Tracking**: Manage stock information including price updates and sector filtering
- **Transaction History**: Record and track buy/sell transactions
- **Advanced Queries**: Filter portfolios by asset value, stock holdings, and more
- **Database Seeding**: Pre-populated sample data for testing and development

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose ODM v9.1.6
- **Environment Variables**: dotenv v17.2.3

## Project Structure

```
.
├── db/
│   └── conn.js                 # Database connection
├── middleware/
│   └── middlewares.js          # Request logging and error handling
├── models/
│   ├── portfolioSchema.js      # Portfolio model and methods
│   ├── stockSchema.js          # Stock model and methods
│   └── transactionSchema.js    # Transaction model
├── routes/
│   ├── portfolioRoutes.js      # Portfolio endpoints
│   ├── stockRoutes.js          # Stock endpoints
│   └── transactionRoutes.js    # Transaction endpoints
├── utilities/
│   ├── data.js                 # Seed data
│   └── seed.js                 # Database seeding script
├── package.json
└── server.js                   # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/portfolio-db
PORT=3001
```

4. Seed the database with sample data:
```bash
npm run seed
```

5. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Portfolios

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolios` | Get all portfolios |
| POST | `/api/portfolios` | Create a new portfolio |
| GET | `/api/portfolios/:id` | Get a specific portfolio |
| PUT | `/api/portfolios/:id` | Update a portfolio |
| DELETE | `/api/portfolios/:id` | Delete a portfolio |
| GET | `/api/portfolios/:price/gtasset` | Get portfolios with assets above a price |
| GET | `/api/portfolios/:price/ltasset` | Get portfolios with assets below a price |
| GET | `/api/portfolios/stock/:symbol` | Get portfolios that own a specific stock |

### Stocks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/stocks` | Get all stocks |
| POST | `/api/stocks` | Create a new stock |
| GET | `/api/stocks/:id` | Get a specific stock |
| PUT | `/api/stocks/:id` | Update a stock |
| DELETE | `/api/stocks/:id` | Delete a stock |
| GET | `/api/stocks/sector/:sector` | Get stocks by sector |
| GET | `/api/stocks/:symbol` | Get stock by symbol |
| PUT | `/api/stocks/:symbol/price` | Update stock price |

### Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions (with portfolio and stock details) |
| POST | `/api/transactions` | Create a new transaction |
| GET | `/api/transactions/:id` | Get a specific transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

## Data Models

### Portfolio Schema

```javascript
{
  name: String,              // Portfolio name
  accType: String,           // "traditional" or "modern"
  totalAssetValue: Number,   // Total value of assets
  managed: Boolean,          // Whether professionally managed
  assets: [{
    symbol: [String],        // Stock symbols
    shares: Number,          // Number of shares
    avgPrice: Number         // Average purchase price
  }]
}
```

### Stock Schema

```javascript
{
  symbol: String,           // Stock ticker symbol (uppercase)
  companyName: String,      // Company name
  currentPrice: Number,     // Current stock price
  sector: String,           // Industry sector
  techStock: Boolean        // Whether it's a tech stock
}
```

### Transaction Schema

```javascript
{
  portID: ObjectId,         // Reference to Portfolio
  stockID: ObjectId,        // Reference to Stock
  action: String,           // "BUY" or "SELL"
  shares: Number,           // Number of shares
  sharePrice: Number,       // Price per share
  date: Date                // Transaction date
}
```

## Database Indexing

The application uses MongoDB indexes for optimized queries:

- **Portfolios**: Indexed by name, account type, and asset symbols
- **Stocks**: Indexed by symbol and sector
- **Transactions**: Indexed by portfolio ID and stock ID with date

## Sample Data

The seed script populates the database with:
- 20 sample portfolios (mix of traditional and modern accounts)
- 20 stocks (tech and non-tech across various sectors)
- 20 randomly generated transactions

## Custom Methods

### Portfolio Methods
- `priceAbove(value)`: Find portfolios with assets above a value
- `priceBelow(value)`: Find portfolios with assets below a value
- `findStock(symbol)`: Find portfolios holding a specific stock

### Stock Methods
- `findBySector(sector)`: Find stocks by sector
- `findBySymbol(symbol)`: Find stock by symbol
- `updatePrice(newPrice)`: Update stock price

## Error Handling

The API includes:
- Global error handling middleware
- Request logging middleware
- Validation error messages
- 404 responses for not found resources
- 500 responses for server errors

## Development

### Running in Development Mode

```bash
npm run dev
```

This uses nodemon to automatically restart the server on file changes.

### Reseeding the Database

To reset and repopulate the database:

```bash
npm run seed
```

⚠️ **Warning**: This will delete all existing data!

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Author

Abul Azad

## Acknowledgments

- Built as part of a skills-based assessment (SBA)
- Uses Express.js and Mongoose for robust API development
