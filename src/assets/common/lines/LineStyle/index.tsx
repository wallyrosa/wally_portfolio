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
          <div className="lineStyleLeft">
            <div className="cubleStyleLeft"></div>
            <div className="lineToStyleLeft"></div>
          </div>
        </Grid>
        <Grid  item xs={4}>
          {props.children}
        </Grid>
        <Grid item xs={7}>
          <div className="lineStyleRight">
            <div className="lineToStyleRight"></div>
            <div className="cubleStyleRight"></div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
