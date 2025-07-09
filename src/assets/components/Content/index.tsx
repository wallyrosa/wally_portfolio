import { ContentMain } from './contents/ContentMain';
import { Header } from '../Header';
import { Box } from '@mui/material';
import { ContentSkills } from './contents/ContentSkills';
import { ContentProject } from './contents/ContentProjects';
import { BackToTop } from '../../common/BackToTop';
import { Footer } from '../Footer';
import { useIsMobile } from '../../hooks/useIsMobile';

export function Content() {
  const isMobile = useIsMobile();

  return (
    <>
      <Box className="container">
        <Box
          className="fullScreen"
          sx={{ scrollSnapAlign: isMobile ? 'none' : 'start' }}
        >
          <Header />
          <ContentMain />
        </Box>
        <ContentSkills />
        <ContentProject />
        <BackToTop />
      </Box>
      <Footer />
    </>
  );
}
