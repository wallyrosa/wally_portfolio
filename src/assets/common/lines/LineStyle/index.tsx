import { Grid, Box } from "@mui/material";
import { ReactNode } from "react";
import { LineRight } from "../LineRight";
import { LineLeft } from "../LineLeft";

interface LineStyleProps {
  children?: ReactNode;
}

export function LineStyle(props: LineStyleProps) {
  return (
    <Box className="lineStyle">
      <Grid container>
        <Grid item xs={1}>
          <LineLeft />
        </Grid>
        <Grid  item xs={3}>
          {props.children}
        </Grid>
        <Grid item xs={8}>
          <LineRight />
        </Grid>
      </Grid>
    </Box>
  );
}
