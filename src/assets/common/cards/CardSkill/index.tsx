import { Box } from '@mui/material';
import { colorCard } from '../colorCard';
import { useClickTouch } from '../../../hooks/onClickTouch';

interface CardSkillProps {
  icon: string;
  name: string;
  onClick?: () => void;
}

export function CardSkill(props: CardSkillProps) {
  const { color, gradient } = colorCard(props.icon);
  const { onTouchStart, onTouchEnd } = useClickTouch(props.onClick);

  return (
    <Box
      className="card"
      onClick={props.onClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
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
