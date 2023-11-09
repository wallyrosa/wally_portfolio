import { Box } from "@mui/material";
import { SmallTerminal } from "../terminals/SmallTerminal";

export function ShowPerfil() {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className="backPerfil">
          <Box className="perfilImg">
            <SmallTerminal />
          </Box>
        </Box>
      </Box>
    );
}
