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
    const {color, gradient} = colorCard(props?.icon);
    const { CardTech, WrapperCard, NameCardTech } = syledCardTech({
      color,
      scale: props?.scale,
      gradient,
    });
  
    return (
      <CardTech onClick={props?.onClick}>
        <WrapperCard>
          {props.children ? props.children : (
            <Box className={`imgCardTech ${props?.icon}`} />
          )}
        </WrapperCard>
        <NameCardTech>{props?.name}</NameCardTech>
      </CardTech>
    );
}