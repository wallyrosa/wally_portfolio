import { Box } from "@mui/material";
import { DtoProps } from "../types";


export function LineLeft(props: DtoProps) {
  const width = `${props?.width ? props.width : '100%'}`;
  return (
    <Box sx={{ width: `${width}`}} className="lineStyleLeft">
      <Box className="cubleStyleLeft"></Box>
      <Box className="lineToStyleLeft"></Box>
    </Box>
  );
}