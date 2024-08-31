import { View, ViewProps } from "tamagui";

export interface IBoxProps extends ViewProps {}

const Box = ({ children, ...props }: IBoxProps) => {
  return <View {...props} />;
};

export default Box;
