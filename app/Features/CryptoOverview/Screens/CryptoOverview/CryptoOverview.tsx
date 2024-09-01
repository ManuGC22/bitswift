import { useState, useEffect } from "react";
import { Box, DisplayText, List } from "@/Components";
import { FormatUtils } from "@/Utils";
import {
  CryptoBadge,
  DetailsTextLabel,
  CryptoListItem,
} from "../../Components/";
import Mixins from "@/Core/Mixins";
import Colors from "@/Core/Colors";
import { CryptoDataAPI } from "@/API";
import { ICryptoData } from "@/Types";
import { Spinner } from "tamagui";

const MARGIN_BOTTOM = Mixins.s(26);

const CryptoOverview = () => {
  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<ICryptoData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const data = await CryptoDataAPI.getCryptoData({ limit: 5 });
        setCryptoData(data);
        if (
          !selectedCrypto ||
          !data.find((crypto) => crypto.id === selectedCrypto.id)
        ) {
          setSelectedCrypto((prevSelectedCrypto) => {
            const existingCrypto = data.find(
              (crypto) => crypto.id === prevSelectedCrypto?.id,
            );
            return existingCrypto ? existingCrypto : data[0];
          });
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load cryptocurrency data");
        setLoading(false);
      }
    };

    fetchCryptoData();

    const interval = setInterval(fetchCryptoData, 30000); // Poll every 10 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [selectedCrypto]);

  if (loading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Spinner color={Colors.primary} size={"large"} />
      </Box>
    );
  }

  if (error || !selectedCrypto) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <DisplayText>{error}</DisplayText>
      </Box>
    );
  }

  return (
    <Box flex={1}>
      <Box padding={Mixins.s(28)}>
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
      <Box flex={1}>
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
