import { Box } from '@mui/material';
import { Terminal } from '../../../terminals/Terminal';
import { ShowPerfil } from '../../../ShowPerfil';
import { LineLeft } from '../../../../common/lines/LineLeft';

export function ContentMain() {
  return (
    <>
      <Box className="contentMain">
        <Terminal />
        <ShowPerfil />
      </Box>
      <Box className="marginLine">
        <LineLeft width={'60%'} />
      </Box>
    </>
  );
}
