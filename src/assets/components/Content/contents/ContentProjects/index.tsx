import { Box } from "@mui/material";
import { LineRight } from "../../../../common/lines/LineRight";
import { LineLeft } from "../../../../common/lines/LineLeft";
import { projects } from "./projects";
import { CardTech } from "../../../../common/cards/CardTech";

export function ContentProject() {
  
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
                  <Box sx={{ marginTop: "-5px" }} className="marginLine">
                    <LineRight width={"60%"} />
                  </Box>
                  <Box id="projects" className="titleContents">
                    PROJETOS<strong className="pointStyle">.</strong>
                  </Box>
                </Box>
              )}
              <Box
                sx={{
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box className="wrapperProject">
                  <Box className="leftTech">
                    <Box sx={{height: '100%'}}>
                      <CardTech name="material ui" icon="material_ui" />
                      <CardTech name="typescript" icon="typescript" />
                      <CardTech name="figma" icon="figma" />
                      <CardTech name="figma" icon="figma" />
                      <CardTech name="figma" icon="figma" />
                      <CardTech name="figma" icon="figma" />
                      <CardTech name="figma" icon="figma" />
                    </Box>
                  </Box>
                  <Box className="terminalView">
                    <Box
                      sx={{
                        margin: "0px 20px",
                        display: "flex",
                        width: "93%",
                        height: "95%",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          margin: "2% 0px ",
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
                  </Box>
                  <Box className="rightTech">
                    <Box sx={{height: '100%'}}>
                      <CardTech name="material ui" icon="material_ui" />
                      <CardTech name="javascript" icon="javascript" />
                      <CardTech name="figma" icon="figma" />
                      <CardTech name="typescript" icon="typescript" />
                      <CardTech name="typescript" icon="typescript" />
                    </Box>
                  </Box>
                </Box>
                <Box className="describeProject">{project.describe}</Box>
              </Box>
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