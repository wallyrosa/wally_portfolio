import { Box } from "@mui/material";
import { colorCard } from "../colorCard";
import { syledCardTech } from "./cardTech.tyled";
import { ReactNode } from "react";

interface CardTechProps {
  name?: string;
  icon?: string;
  children?: ReactNode;
  onClick?: () => void;
  scale?: string;
}
export function CardTech(props: CardTechProps) {
    const color = colorCard(props?.icon);
    const styled = syledCardTech({ color, scale: props?.scale });
    return (
      <styled.CardTech onClick={props?.onClick}>
        <styled.WrapperCard>
          {props.children ? props.children : (
            <Box className={`imgCardTech ${props?.icon}`} />
          )}
        </styled.WrapperCard>
        <styled.NameCardTech>{props?.name}</styled.NameCardTech>
      </styled.CardTech>
    );
}