import { ICryptoData } from "@/Types";
import { CryptoDataModel } from "@/Models";

type IQueryCryptoData = {
  limit?: number;
};
const API_KEY = process.env.EXPO_PUBLIC_CG_API_KEY;
export const getCryptoData = async ({
  limit = 5,
}: IQueryCryptoData): Promise<ICryptoData[]> => {
  try {
    // Fetch crypto data from the CoinGecko API
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=1&precision=2&sparkline=false&x_cg_demo_api_key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch crypto data");
    }

    const data = await response.json();

    // Transform the data using the CryptoModel
    const cryptoData: ICryptoData[] = data.map(CryptoDataModel.fromAPI);
    return cryptoData;
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    return [];
  }
};

export default getCryptoData;
