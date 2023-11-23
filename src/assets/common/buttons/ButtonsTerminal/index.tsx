import { Box } from "@mui/material";

interface ButtonsTerminalProps {
  style?: {}
}

export function ButtonsTerminal(props: ButtonsTerminalProps) {
  return (
    <Box sx={props.style} className="buttonsTerminal">
      <Box className="redButton" />
      <Box className="yellowButton" />
      <Box className="greenButton" />
    </Box>
  );
}