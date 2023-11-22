import { Box } from "@mui/material";
import { styleCard } from "../styleCard";
import { syledCardTech } from "./cardTech.tyled";

interface CardTechProps {
    name: string
    icon: string
}
export function CardTech(props: CardTechProps) {
    const color = styleCard(props.icon);
    const styled = syledCardTech({color})
    return (
      <styled.CardTech>
        <styled.WrapperCard>
          <Box className={`imgCardTech ${props.icon}`} />
        </styled.WrapperCard>
        <styled.NameCardTech>{props.name}</styled.NameCardTech>
      </styled.CardTech>
    );
}