import { Box } from '@mui/material';
import { DtoProps } from '../types';

export function LineRight(props: DtoProps) {
  const width = `${props?.width ? props.width : '100%'}`;
  return (
    <Box className="lineStyleRight">
      <Box sx={{ width: `${width}` }} className="lineToStyleRight"></Box>
      <Box className="cubleStyleRight"></Box>
    </Box>
  );
}
