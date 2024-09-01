import { useState } from "react";
import { Box, DisplayText, List } from "@/Components";
import { FormatUtils } from "@/Utils";
import {
  CryptoBadge,
  DetailsTextLabel,
  CryptoListItem,
} from "../../Components/";
import Mixins from "@/Core/Mixins";
import Colors from "@/Core/Colors";

const MARGIN_BOTTOM = Mixins.s(26);

const cryptoData = [
  {
    id: "1",
    name: "Bitcoin",
    abbreviation: "BTC",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    price: 599900,
    marketCap: 599900000,
    volume24h: 599900000,
    allTimeHigh: 599900000,
  },
  {
    id: "2",
    name: "Ethereum",
    abbreviation: "ETH",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    price: 299900,
    marketCap: 299900000,
    volume24h: 299900000,
    allTimeHigh: 299900000,
  },
  {
    id: "3",
    name: "Binance Coin",
    abbreviation: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
    price: 45000,
    marketCap: 75000000,
    volume24h: 45000000,
    allTimeHigh: 50000000,
  },
  {
    id: "4",
    name: "Cardano",
    abbreviation: "ADA",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    price: 1500,
    marketCap: 10000000,
    volume24h: 5000000,
    allTimeHigh: 2000000,
  },
  {
    id: "5",
    name: "Ripple",
    abbreviation: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    price: 1200,
    marketCap: 50000000,
    volume24h: 30000000,
    allTimeHigh: 35000000,
  },
];

const CryptoOverview = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoData[0]);

  return (
    <Box>
      <Box mb={MARGIN_BOTTOM} padding={Mixins.s(28)}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mb={MARGIN_BOTTOM}
        >
          <CryptoBadge
            name={selectedCrypto.name}
            abbreviation={selectedCrypto.abbreviation}
            image={selectedCrypto.image}
          />
          <DisplayText fontSize={Mixins.s(20)} fontWeight="500">
            {FormatUtils.int2USD(selectedCrypto.price)}
          </DisplayText>
        </Box>
        <Box mb={MARGIN_BOTTOM}>
          <DetailsTextLabel
            label="Market Cap"
            value={FormatUtils.int2USD(selectedCrypto.marketCap)}
          />
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <DetailsTextLabel
            label="24h Volume"
            value={FormatUtils.int2USD(selectedCrypto.volume24h)}
          />
          <DetailsTextLabel
            label="All Time High"
            value={FormatUtils.int2USD(selectedCrypto.allTimeHigh)}
          />
        </Box>
      </Box>
      <Box>
        <List
          data={cryptoData}
          renderItem={({ item }) => (
            <CryptoListItem
              name={item.name}
              abbreviation={item.abbreviation}
              image={item.image}
              price={item.price}
              cardProps={{
                onPress: () => setSelectedCrypto(item),
                borderColor:
                  selectedCrypto.id === item.id ? Colors.primary : Colors.white,
                borderWidth: selectedCrypto.id === item.id ? 1 : 0.5,
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default CryptoOverview;
