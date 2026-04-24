import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { LineRight } from '../LineRight';
import { LineLeft } from '../LineLeft';
interface LineStyleProps {
  children?: ReactNode;
  grid?: number[];
}

export function LineStyle(props: LineStyleProps) {
  const col0 = props?.grid?.length ? props.grid[0] : 4;
  const col1 = props?.grid?.length ? props.grid[1] : 4;
  const col2 = props?.grid?.length ? props.grid[2] : 4;

  return (
    <Box className="lineStyle">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            flex: col0,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <LineLeft />
        </Box>
        <Box
          sx={{
            flex: col1,
            minWidth: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {props.children}
        </Box>
        <Box
          sx={{
            flex: col2,
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <LineRight />
        </Box>
      </Box>
    </Box>
  );
}
