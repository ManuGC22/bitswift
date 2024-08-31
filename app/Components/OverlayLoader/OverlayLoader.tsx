import { Spinner } from "tamagui";
import Box from "../Box";
import DisplayText from "../DisplayText";

export interface IOverlayLoaderProps {
  mode?: "modal" | "component";
  title?: string;
}

const OverlayLoader = ({ mode = "modal", title }: IOverlayLoaderProps) => {
  return (
    <Box
      {...(mode === "modal"
        ? {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }
        : { height: "100%", flex: 1 })}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"white"}
      zIndex={99}
    >
      <Box justifyContent={"center"} alignItems={"center"} rowGap={"xl"}>
        {title && <DisplayText>{title}</DisplayText>}
        <Spinner size={"large"} color={"primary"} />
      </Box>
    </Box>
  );
};

export default OverlayLoader;
