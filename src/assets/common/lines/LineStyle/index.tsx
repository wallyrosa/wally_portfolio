import { Grid, Box } from "@mui/material";
import { ReactNode } from "react";

interface LineStyleProps {
  children?: ReactNode;
}

export function LineStyle(props: LineStyleProps) {
  return (
    <Box className="lineStyle">
      <Grid container>
        <Grid item xs={1}>
          <Box className="lineStyleLeft">
            <Box className="cubleStyleLeft"></Box>
            <Box className="lineToStyleLeft"></Box>
          </Box>
        </Grid>
        <Grid  item xs={4}>
          {props.children}
        </Grid>
        <Grid item xs={7}>
          <Box className="lineStyleRight">
            <Box className="lineToStyleRight"></Box>
            <Box className="cubleStyleRight"></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
