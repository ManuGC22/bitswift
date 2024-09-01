import { Box, DisplayText, IDisplayTextProps } from "@/Components";
import Mixins from "@/Core/Mixins";
export interface IDetailsTextLabelProps {
  label: string;
  value?: string;
  labelProps?: Omit<IDisplayTextProps, "children">;
  valueProps?: Omit<IDisplayTextProps, "children">;
}

const DetailsTextLabel = ({
  label,
  value,
  labelProps,
  valueProps,
}: IDetailsTextLabelProps) => {
  return (
    <Box flexDirection="column" alignItems="center" columnGap={Mixins.s(2)}>
      <DisplayText {...labelProps} fontSize={Mixins.s(14)}>
        {label}:
      </DisplayText>
      <DisplayText fontWeight={"500"} fontSize={Mixins.s(16)} {...valueProps}>
        {value}
      </DisplayText>
    </Box>
  );
};

export default DetailsTextLabel;
