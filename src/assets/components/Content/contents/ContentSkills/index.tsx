import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";
import { CardSkill } from "../../../../common/CardSkill";

export function ContentSkills() {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box className="marginLine">
          <LineRight width={"60%"} />
        </Box>
        <Box sx={{ height: '100%' }}>
          <Box className="titleContents">
            SKILLS<strong className="pointStyle">.</strong>
          </Box>
          <Box className="subTitleContents">Avançado</Box>
          <Box className="skillsAvancadas">
            <CardSkill icon={"html"} name={"html"} />
            <CardSkill icon={"react"} name={"react"} />
            <CardSkill icon={"javascript"} name={"javascript"} />
            <CardSkill icon={"typescript"} name={"typescript"} />
            <CardSkill icon={"css"} name={"css"} />
          </Box>
          <Box sx={{ margin: '20px 0px' }} className="subTitleContents">Em Desenvolvimento</Box>
          <Box className="skillsAvancadas">
            <CardSkill icon={"vue"} name={"vue"} />
            <CardSkill icon={"material-ui"} name={"material ui"} />
            <CardSkill icon={"figma"} name={"figma"} />
          </Box>
        </Box>
        <Box className="marginLine">
          <LineLeft width={"60%"} />
        </Box>
      </Box>
    );
}