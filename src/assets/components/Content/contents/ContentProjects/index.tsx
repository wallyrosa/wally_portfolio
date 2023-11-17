import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";
import { projects } from "./projects";

export function ContentProject() {
  function leftOrRight(index: number) {
    const position = { direction: "ltr", justify: "flex-start" };
    if (index % 2) {
      position.direction = 'rtl';
      position.justify = 'flex-end';
      return position
    }
    return position
  }
  
  return (
    <Box sx={{ minHeight: "100vh", height: "100%" }} className="fullScreen">
      <Box className="marginLine">
        <LineRight width={"60%"} />
      </Box>
      <Box className="titleContents">
        PROJETOS<strong className="pointStyle">.</strong>
      </Box>
      {projects?.map((project, index) => (
        <Box
          sx={{
            display: "flex",
            margin: "40px 0px",
            direction: `${leftOrRight(index).direction}`,
            height: '400px',
            alignItems: 'center'
          }}
          key={index}
        >
          <Box className="terminalView">
            <Box sx={{ width: "100%", margin: "10px 0px", direction: "ltr" }}>
              <Box
                sx={{ transform: "scale(0.8)" }}
                className="buttonsTerminal"
              />
            </Box>
            <Box
              sx={{ direction: "ltr" }}
              className={`imgTerminal ${project.imgClass}`}
            />
          </Box>
          <Box
            sx={{
              width: "50%",
              maxHeight: "400px",
              overflow: "auto",
              margin: "0px 30px",
            }}
          >
            <Box sx={{ direction: 'ltr', display: 'flex', alignItems: 'center', justifyContent: `${leftOrRight(index).justify}` }} className="titleProject">
              {project.title}
              <strong className="pointStyle">.</strong>
            </Box>
            <Box className="describeProject">{project.describe}</Box>
          </Box>
        </Box>
      ))}
      <Box className="marginLine">
        <LineLeft width={"60%"} />
      </Box>
    </Box>
  );
}