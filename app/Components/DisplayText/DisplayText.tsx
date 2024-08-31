import { useMemo } from "react";
import { Text, TextProps as TamaguiTextProps } from "tamagui";

export interface IDisplayTextProps extends TamaguiTextProps {
  children: React.ReactNode;
}

const DisplayText = ({ children, ...props }: IDisplayTextProps) => {
  const displayValue = useMemo(() => {
    return (typeof children === "number" && isNaN(children)) || !children
      ? "-"
      : children;
  }, [children]);
  return <Text {...props}>{displayValue}</Text>;
};

export default DisplayText;
