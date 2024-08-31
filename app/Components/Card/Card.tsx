import { Card as TamaguiCard, CardProps } from "tamagui";

export interface ICardProps extends CardProps {}

const Card = ({ children, ...props }: ICardProps) => {
  return <TamaguiCard {...props}>{children}</TamaguiCard>;
};

export default Card;
