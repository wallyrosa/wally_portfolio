import { Box } from '@mui/material';
import { LineRight } from '../../../../common/lines/LineRight';
import { LineLeft } from '../../../../common/lines/LineLeft';
import { CardSkill } from '../../../../common/cards/CardSkill';
import { cardsAvancados, cardsDesenvolvimento } from './cards';
import { useIsMobile } from '../../../../hooks/useIsMobile';

export function ContentSkills() {
  const isMobile = useIsMobile();

  return (
    <Box
      className="fullScreenToMobile"
      sx={{ scrollSnapAlign: isMobile ? 'none' : 'start' }}
    >
      <Box className="circleSkills" />
      <Box className="marginLine">
        <LineRight width={'60%'} />
      </Box>
      <Box>
        <Box id="skills" className="titleContents">
          SKILLS<strong>.</strong>
        </Box>
        <Box className="subTitleContents">Avançado</Box>
        <Box className="skillsAvancadas">
          {cardsAvancados.map((card, index) => (
            <CardSkill key={index} icon={card.icon} name={card.name} />
          ))}
        </Box>
        <Box className="subTitleContents">Em desenvolvimento</Box>
        <Box className="skillsAvancadas">
          {cardsDesenvolvimento.map((card, index) => (
            <CardSkill key={index} icon={card.icon} name={card.name} />
          ))}
        </Box>
      </Box>
      <Box className="marginLine">
        <LineLeft width={'60%'} />
      </Box>
    </Box>
  );
}
