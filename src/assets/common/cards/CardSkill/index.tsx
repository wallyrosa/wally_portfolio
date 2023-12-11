import { Box } from '@mui/material';
import { colorCard } from '../colorCard';

interface CardSkillProps {
  icon: string;
  name: string;
}
export function CardSkill(props: CardSkillProps) {
  const { color, gradient } = colorCard(props.icon);

  return (
    <Box className="card">
      <Box
        sx={{
          borderWidth: '10px',
          borderStyle: 'solid',
          borderColor: `${color}`,
          borderImage: `${gradient}`,
          boxShadow: `0px 0px 10px 0px ${color}`,
        }}
        className="cardBorder"
      >
        <Box sx={{ width: '70%' }}>
          <Box className={`icon ${props.icon}`} />
        </Box>
      </Box>
      <div className="textCard">{props.name}</div>
      <div className="lineCard"></div>
    </Box>
  );
}
