import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";
import { CardSkill } from "../../../../common/cards/CardSkill";
import { cardsAvancados, cardsDesenvolvimento } from "./cards";

export function ContentSkills() {
    return (
      <Box className="fullScreen" sx={{ scrollSnapAlign: "start" }}>
        <Box className="circleSkills" />
        <Box className="marginLine">
          <LineRight width={"60%"} />
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
          <Box className="subTitleContents">Em Desenvolvimento</Box>
          <Box className="skillsAvancadas">
            {cardsDesenvolvimento.map((card, index) => (
              <CardSkill key={index} icon={card.icon} name={card.name} />
            ))}
          </Box>
        </Box>
        <Box className="marginLine">
          <LineLeft width={"60%"} />
        </Box>
      </Box>
    );
}