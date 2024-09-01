import { Box, DisplayText, Image } from "@/Components";
import Mixins from "@/Core/Mixins";
export interface ICryptoBadgeProps {
  name: string;
  abbreviation: string;
  image: string;
}

const CryptoBadge = ({ name, abbreviation, image }: ICryptoBadgeProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap={Mixins.s(13.5)}
    >
      <Box>
        <Image
          source={{ uri: image, width: Mixins.s(45), height: Mixins.s(45) }}
          width={"$5"}
          height={"$5"}
          $gtSm={{ width: "$6", height: "$6" }}
          $gtMd={{ width: "$8", height: "$8" }}
          $gtLg={{ width: "$10", height: "$10" }}
        />
      </Box>
      <Box gap={Mixins.s(2)}>
        <DisplayText fontWeight="700" fontSize={Mixins.s(16)}>
          {abbreviation}
        </DisplayText>
        <DisplayText fontSize={Mixins.s(14)}>{name}</DisplayText>
      </Box>
    </Box>
  );
};

export default CryptoBadge;
