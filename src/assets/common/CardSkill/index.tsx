import { Box } from "@mui/material";
import { styleCard } from "./styleCard";

interface CardSkillProps {
  icon: string
  name: string
}
export function CardSkill(props: CardSkillProps) {
  const color = styleCard(props.icon)

  return (
    <Box className="card">
      <Box
        sx={{
          border: `10px solid ${color}`,
          boxShadow: `0px 0px 10px 0px ${color}`,
        }}
        className="cardBorder"
      >
        <Box className={`icon ${props.icon}`} />
      </Box>
      <div className="textCard">{props.name}</div>
      <div className="lineCard"></div>
    </Box>
  );
}