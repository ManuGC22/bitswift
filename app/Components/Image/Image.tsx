import { Image as TamaguiImage, ImageProps } from "tamagui";

export interface IImageProps extends ImageProps {}

const Image = ({ ...props }: IImageProps) => {
  return <TamaguiImage {...props} />;
};

export default Image;
