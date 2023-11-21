import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";
import { projects } from "./projects";

export function ContentProject() {
  function leftOrRight(index: number) {
    const position = { justify: "flex-start" };
    if (index % 2) {
      position.justify = 'flex-end';
      return position
    }
    return position
  }
  
  return (
    <>
      {projects?.map((project, index) => (
        <>
          <Box sx={{ flexDirection: "column" }} className="fullScreen">
            <Box
              sx={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                scrollSnapAlign: "center",
                flexDirection: "column",
              }}
              key={index}
            >
              {index === 0 && (
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ marginTop: '-5px'}} className="marginLine">
                    <LineRight width={"60%"} />
                  </Box>
                  <Box id="projects" className="titleContents">
                    PROJETOS<strong className="pointStyle">.</strong>
                  </Box>
                </Box>
              )}
              <Box sx={{ margin: "auto" }}>
                <Box className="terminalView">
                  <Box
                    sx={{
                      width: "100%",
                      margin: "15px 0px ",
                    }}
                  >
                    <Box
                      sx={{ transform: "scale(0.8)", position: "absolute" }}
                      className="buttonsTerminal"
                    />
                    <Box className="titleProject">{project.title}</Box>
                  </Box>
                  <Box
                    sx={{ direction: "ltr" }}
                    className={`imgTerminal ${project.imgClass}`}
                  />
                </Box>
                <Box className="describeProject">{project.describe}</Box>
              </Box>
              {/* <Box
                sx={{
                  width: "50%",
                  maxHeight: "400px",
                  overflow: "auto",
                  margin: "0px 30px",
                }}
              >
                <Box
                  sx={{
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: `${leftOrRight(index).justify}`,
                  }}
                  className="titleProject"
                >
                  {project.title}
                  <strong className="pointStyle">.</strong>
                </Box>
              </Box> */}
            </Box>
          </Box>
        </>
      ))}
      <Box className="comingSoon">
        EM BREVE<strong className="pointStyle">.</strong>
      </Box>
      <Box className="marginLine">
        <LineLeft width={"60%"} />
      </Box>
    </>
  );
}