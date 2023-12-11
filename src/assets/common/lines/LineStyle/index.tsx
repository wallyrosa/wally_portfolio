import { Grid, Box } from '@mui/material';
import { ReactNode } from 'react';
import { LineRight } from '../LineRight';
import { LineLeft } from '../LineLeft';
interface LineStyleProps {
  children?: ReactNode;
  grid?: number[];
}

export function LineStyle(props: LineStyleProps) {
  return (
    <Box className="lineStyle">
      <Grid container>
        <Grid
          sx={{ margin: 'auto' }}
          item
          xs={props?.grid?.length ? props?.grid[0] : 4}
        >
          <LineLeft />
        </Grid>
        <Grid item xs={props?.grid?.length ? props?.grid[1] : 4}>
          {props.children}
        </Grid>
        <Grid
          sx={{ margin: 'auto' }}
          item
          xs={props?.grid?.length ? props?.grid[2] : 4}
        >
          <LineRight />
        </Grid>
      </Grid>
    </Box>
  );
}
