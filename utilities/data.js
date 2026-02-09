// ==========================================================
                //Seed Data for Porfolios
// ==========================================================
const portfolios = [
  {
    name: "Alpha Growth",
    accType: "modern",
    totalAssetValue: 120000,
    managed: true,
    assets: [{ symbol: ["AAPL"], shares: 50, avgPrice: 150 }]
  },
  {
    name: "Retirement Plus",
    accType: "traditional",
    totalAssetValue: 98000,
    managed: false,
    assets: [{ symbol: ["MSFT"], shares: 40, avgPrice: 280 }]
  },
  {
    name: "Tech Vision",
    accType: "modern",
    totalAssetValue: 150000,
    managed: true,
    assets: [{ symbol: ["GOOGL"], shares: 25, avgPrice: 2400 }]
  },
  {
    name: "Stable Income",
    accType: "traditional",
    totalAssetValue: 87000,
    managed: false,
    assets: [{ symbol: ["JNJ"], shares: 60, avgPrice: 160 }]
  },
  {
    name: "Future Fund",
    accType: "modern",
    totalAssetValue: 200000,
    managed: true,
    assets: [{ symbol: ["TSLA"], shares: 30, avgPrice: 700 }]
  },
  {
    name: "Wealth Builder",
    accType: "traditional",
    totalAssetValue: 76000,
    managed: false,
    assets: [{ symbol: ["KO"], shares: 100, avgPrice: 55 }]
  },
  {
    name: "NextGen Portfolio",
    accType: "modern",
    totalAssetValue: 135000,
    managed: true,
    assets: [{ symbol: ["NVDA"], shares: 20, avgPrice: 900 }]
  },
  {
    name: "Legacy Savings",
    accType: "traditional",
    totalAssetValue: 92000,
    managed: false,
    assets: [{ symbol: ["PG"], shares: 80, avgPrice: 140 }]
  },
  {
    name: "Momentum Fund",
    accType: "modern",
    totalAssetValue: 180000,
    managed: true,
    assets: [{ symbol: ["META"], shares: 35, avgPrice: 320 }]
  },
  {
    name: "Secure Holdings",
    accType: "traditional",
    totalAssetValue: 84000,
    managed: false,
    assets: [{ symbol: ["WMT"], shares: 70, avgPrice: 150 }]
  },
  {
    name: "Dynamic Capital",
    accType: "modern",
    totalAssetValue: 165000,
    managed: true,
    assets: [{ symbol: ["AMD"], shares: 45, avgPrice: 130 }]
  },
  {
    name: "Golden Nest",
    accType: "traditional",
    totalAssetValue: 99000,
    managed: false,
    assets: [{ symbol: ["INTC"], shares: 90, avgPrice: 45 }]
  },
  {
    name: "Smart Invest",
    accType: "modern",
    totalAssetValue: 145000,
    managed: true,
    assets: [{ symbol: ["CRM"], shares: 28, avgPrice: 220 }]
  },
  {
    name: "Balanced Future",
    accType: "traditional",
    totalAssetValue: 88000,
    managed: false,
    assets: [{ symbol: ["PEP"], shares: 65, avgPrice: 175 }]
  },
  {
    name: "Quantum Fund",
    accType: "modern",
    totalAssetValue: 210000,
    managed: true,
    assets: [{ symbol: ["AMZN"], shares: 18, avgPrice: 3300 }]
  },
  {
    name: "Heritage Plan",
    accType: "traditional",
    totalAssetValue: 73000,
    managed: false,
    assets: [{ symbol: ["IBM"], shares: 55, avgPrice: 140 }]
  },
  {
    name: "Velocity Growth",
    accType: "modern",
    totalAssetValue: 190000,
    managed: true,
    assets: [{ symbol: ["NFLX"], shares: 22, avgPrice: 500 }]
  },
  {
    name: "Safe Harbor",
    accType: "traditional",
    totalAssetValue: 81000,
    managed: false,
    assets: [{ symbol: ["MMM"], shares: 40, avgPrice: 180 }]
  },
  {
    name: "Innovation Lab",
    accType: "modern",
    totalAssetValue: 175000,
    managed: true,
    assets: [{ symbol: ["ORCL"], shares: 50, avgPrice: 115 }]
  },
  {
    name: "Pension Secure",
    accType: "traditional",
    totalAssetValue: 95000,
    managed: false,
    assets: [{ symbol: ["VZ"], shares: 120, avgPrice: 40 }]
  }
];
// ==========================================================
                //Seed data for stocks
// ==========================================================
const stocks = [
  {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    currentPrice: 189.45,
    sector: "Technology",
    techStock: true
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    currentPrice: 415.22,
    sector: "Technology",
    techStock: true
  },
  {
    symbol: "GOOGL",
    companyName: "Alphabet Inc.",
    currentPrice: 152.88,
    sector: "Technology",
    techStock: true
  },
  {
    symbol: "AMZN",
    companyName: "Amazon.com Inc.",
    currentPrice: 172.30,
    sector: "Consumer Discretionary",
    techStock: true
  },
  {
    symbol: "META",
    companyName: "Meta Platforms Inc.",
    currentPrice: 485.50,
    sector: "Technology",
    techStock: true
  },
  {
    symbol: "TSLA",
    companyName: "Tesla Inc.",
    currentPrice: 218.60,
    sector: "Automotive",
    techStock: true
  },
  {
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    currentPrice: 720.10,
    sector: "Technology",
    techStock: true
  },
  {
    symbol: "NFLX",
    companyName: "Netflix Inc.",
    currentPrice: 610.45,
    sector: "Entertainment",
    techStock: true
  },
  {
    symbol: "INTC",
    companyName: "Intel Corporation",
    currentPrice: 43.20,
    sector: "Technology",
    techStock: true
  },
  {
    symbol: "IBM",
    companyName: "International Business Machines",
    currentPrice: 187.40,
    sector: "Technology",
    techStock: true
  },

  {
    symbol: "JPM",
    companyName: "JPMorgan Chase & Co.",
    currentPrice: 172.90,
    sector: "Finance",
    techStock: false
  },
  {
    symbol: "BAC",
    companyName: "Bank of America Corp.",
    currentPrice: 34.80,
    sector: "Finance",
    techStock: false
  },
  {
    symbol: "WMT",
    companyName: "Walmart Inc.",
    currentPrice: 168.55,
    sector: "Retail",
    techStock: false
  },
  {
    symbol: "KO",
    companyName: "Coca-Cola Company",
    currentPrice: 61.75,
    sector: "Beverages",
    techStock: false
  },
  {
    symbol: "PEP",
    companyName: "PepsiCo Inc.",
    currentPrice: 170.30,
    sector: "Beverages",
    techStock: false
  },
  {
    symbol: "JNJ",
    companyName: "Johnson & Johnson",
    currentPrice: 156.40,
    sector: "Healthcare",
    techStock: false
  },
  {
    symbol: "XOM",
    companyName: "Exxon Mobil Corporation",
    currentPrice: 102.15,
    sector: "Energy",
    techStock: false
  },
  {
    symbol: "CVX",
    companyName: "Chevron Corporation",
    currentPrice: 148.90,
    sector: "Energy",
    techStock: false
  },
  {
    symbol: "DIS",
    companyName: "The Walt Disney Company",
    currentPrice: 93.25,
    sector: "Entertainment",
    techStock: false
  },
  {
    symbol: "MCD",
    companyName: "McDonald's Corporation",
    currentPrice: 295.60,
    sector: "Food & Beverage",
    techStock: false
  }
];
// ==========================================================
                //Seed Data for Transactions
// ==========================================================
// Data is dependent on dynamically generated values. Hard coded values will not work
// Function below dynamically creates the transaction details
const genTransactions = (portfolios,stocks)=>{
    //error handling if no stocks in Stock collection or portfolios in Portfolios collection
    if (!portfolios.length || !stocks.length){
        return res.status(400).json({error: "Portfolios or stocks are empty"})
    }
    const transactions = [];

    for (let i=0; i<20; i++){
        // Chooses random Portfolio 
        const rPortfolio = portfolios[Math.floor(Math.random() * portfolios.length)];
        // Chooses random stock
        const rStock = stocks[Math.floor(Math.random() * stocks.length)];
        // 50/50 chance buy or sell of chosen stock 
        const isBuy = Math.random() > .5;
        // Generates a random number of shares btwn 1-100
        const shares = Math.floor(Math.random()*100)+1;
        //Chooses a random Price
        const priceFluc = Math.random() * .4 - .2;
        const sharePrice = Number((rStock.currentPrice*(1+priceFluc)).toFixed(2));
        //Random date withing the past 60 days
        const date = new Date(Date.now() - Math.floor(Math.random() *30)*86400000);

        transactions.push({
            portID : rPortfolio._id,
            stockID : rStock._id,
            action: isBuy? "BUY":"SELL",
            shares,
            sharePrice,
            date

        });
    }    
    return transactions;
}

export {portfolios,stocks,genTransactions};


