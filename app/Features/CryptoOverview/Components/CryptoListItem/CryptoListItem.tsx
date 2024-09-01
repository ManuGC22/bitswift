import { Box, Card, ICardProps, DisplayText } from "@/Components";
import CryptoBadge from "../CryptoBadge";
import Mixins from "@/Core/Mixins";
import { int2USD } from "@/Utils/FormatUtils";

export interface ICryptoListItemProps {
  name: string;
  abbreviation: string;
  image: string;
  price: number;
  cardProps?: Omit<ICardProps, "children">;
}

const CryptoListItem = ({
  name,
  abbreviation,
  image,
  price,
  cardProps,
}: ICryptoListItemProps) => {
  return (
    <Card
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding={Mixins.s(14.5)}
      width={"100%"}
      backgroundColor={"$colorTransparent"}
      {...cardProps}
    >
      <CryptoBadge name={name} abbreviation={abbreviation} image={image} />
      <Box marginRight={Mixins.s(4)}>
        <DisplayText fontSize={Mixins.s(16)}>{int2USD(price)}</DisplayText>
      </Box>
    </Card>
  );
};

export default CryptoListItem;
