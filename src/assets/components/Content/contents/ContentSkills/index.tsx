import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";
import { CardSkill } from "../../../../common/CardSkill";

export function ContentSkills() {
  const cardsAvancados = [
    {
      icon: "html",
      name: "html",
    },
    {
      icon: "react",
      name: "react",
    },
    {
      icon: "javascript",
      name: "javascript",
    },
    {
      icon: "typescript",
      name: "typescript",
    },
    {
      icon: "css",
      name: "css",
    },
  ];
  const cardsDesenvolvimento = [
    {
      icon: "vue",
      name: "vue",
    },
    {
      icon: "material-ui",
      name: "material ui",
    },
    {
      icon: "figma",
      name: "figma",
    },
  ];
    return (
      <Box className="fullScreen">
        <Box className="marginLine">
          <LineRight width={"60%"} />
        </Box>
        <Box>
          <Box className="titleContents">
            SKILLS<strong className="pointStyle">.</strong>
          </Box>
          <Box className="subTitleContents">Avançado</Box>
          <Box className="skillsAvancadas">
            {cardsAvancados.map((card) => (
              <CardSkill icon={card.icon} name={card.name} />
            ))}
          </Box>
          <Box sx={{ margin: "20px 0px" }} className="subTitleContents">
            Em Desenvolvimento
          </Box>
          <Box className="skillsAvancadas">
            {cardsDesenvolvimento.map((card) => (
              <CardSkill icon={card.icon} name={card.name} />
            ))}
          </Box>
        </Box>
        <Box className="marginLine">
          <LineLeft width={"60%"} />
        </Box>
      </Box>
    );
}