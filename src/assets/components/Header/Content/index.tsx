import { Header } from "..";
import { ShowPerfil } from "../../ShowPerfil";
import { Terminal } from "../../terminals/Terminal";
import { Box } from "@mui/material";

export function Content() {
    return (
      <>
        <Box className="container">
          <Header />
          <Box className="contentMain">
            <Terminal />
            <ShowPerfil />
          </Box>
          <Box className="lineStyleBottom ">
            <Box className="cubleStyleLeft"></Box>
            <Box className="lineToStyleLeft"></Box>
          </Box>
            </Box>
            <footer className="footer"></footer>
      </>
    );
}