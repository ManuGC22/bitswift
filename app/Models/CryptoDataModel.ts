import { ICryptoData, ICryptoDataAPI } from "@/Types";

const CryptoModel = {
  fromAPI: (crypto: ICryptoDataAPI): ICryptoData => {
    return {
      id: crypto.id,
      name: crypto.name,
      abbreviation: crypto.symbol.toUpperCase(),
      image: crypto.image,
      price: crypto.current_price,
      marketCap: crypto.market_cap,
      volume24h: crypto.total_volume,
      allTimeHigh: crypto.ath,
    };
  },
};

export default CryptoModel;
