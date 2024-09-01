import { useMemo } from "react";
import { Text, TextProps } from "tamagui";

export interface IDisplayTextProps extends TextProps {
  children: React.ReactNode;
}

const DisplayText = ({ children, fontWeight, ...props }: IDisplayTextProps) => {
  const displayValue = useMemo(() => {
    return (typeof children === "number" && isNaN(children)) || !children
      ? "-"
      : children;
  }, [children]);

  const fontFamily = useMemo(() => {
    switch (fontWeight) {
      case "bold":
      case "700":
        return "PoppinsBold";
      case "600":
        return "PoppinsSemiBold";
      case "500":
        return "PoppinsMedium";
      case "300":
        return "PoppinsLight";
      default:
        return "Poppins";
    }
  }, [fontWeight]);

  return (
    <Text color={"white"} {...props} fontFamily={fontFamily}>
      {displayValue}
    </Text>
  );
};

export default DisplayText;
