import { ContentMain } from "./contents/ContentMain";
import { Header } from "../Header";
import { Box } from "@mui/material";
import { ContentSkills } from "./contents/ContentSkills";
import { ContentProject } from "./contents/ContentProjects";

export function Content() {
    return (
      <>
        <Box className="container">
          <Box className="fullScreen">
            <Header />
            <ContentMain />
          </Box>
          <ContentSkills />
          <ContentProject />
        </Box>
        <footer className="footer"></footer>
      </>
    );
}