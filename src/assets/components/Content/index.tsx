import { ContentMain } from "./contents/ContentMain";
import { Header } from "../Header";
import { Box } from "@mui/material";
import { ContentSkills } from "./contents/ContentSkills";
import { ContentProject } from "./contents/ContentProjects";
import { BackToTop } from "../../common/BackToTop";

export function Content() {
    return (
      <>
        <Box className="container">
          <Box className="fullScreen" sx={{ scrollSnapAlign: "center" }}>
            <Header />
            <ContentMain />
          </Box>
          <ContentSkills />
          <ContentProject />
          <BackToTop />
        </Box>
        <footer className="footer"></footer>
      </>
    );
}