import { ContentMain } from "./contents/ContentMain";
import { Header } from "../Header";
import { Box } from "@mui/material";
import { ContentSkills } from "./contents/ContentSkills";

export function Content() {
    return (
      <>
        <Box className="container">
          <Box className="fullScreen">
            <Header />
            <ContentMain />
          </Box>
          <ContentSkills />
        </Box>
        <footer className="footer"></footer>
      </>
    );
}