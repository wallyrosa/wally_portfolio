import { Box, Dialog, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { LineRight } from '../../../../common/lines/LineRight';
import { LineLeft } from '../../../../common/lines/LineLeft';
import { projects } from './projects';
import { CardTech } from '../../../../common/cards/CardTech';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonsTerminal } from '../../../../common/buttons/ButtonsTerminal';
import { useIsMobile } from '../../../../hooks/useIsMobile';

const PROJECT_IMAGE_MAP = {
  poliDigital: new URL('../../../../imgs/poli-digital.png', import.meta.url).href,
  mapaDoSaber: new URL('../../../../imgs/mapa-do-saber.png', import.meta.url)
    .href,
  yellotmob: new URL('../../../../imgs/yellotmob.png', import.meta.url).href,
};

export function ContentProject() {
  const isMobile = useIsMobile();
  const [selectedImageClass, setSelectedImageClass] = useState<string | null>(
    null
  );

  useEffect(() => {
    Object.values(PROJECT_IMAGE_MAP).forEach((src) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
    });
  }, []);

  const closePreview = () => {
    setSelectedImageClass(null);
  };
  const selectedImageSrc = selectedImageClass
    ? PROJECT_IMAGE_MAP[selectedImageClass as keyof typeof PROJECT_IMAGE_MAP]
    : null;

  return (
    <>
      {projects?.map((project, index) => (
        <Box className="project-item" key={index}>
          <Box
            sx={{
              display: 'flex',
              height: isMobile ? '100%' : '100vh',
              padding: isMobile ? '10px 0px 0px 0px' : '0px',
              alignItems: 'center',
              justifyContent: 'center',
              scrollSnapAlign: isMobile ? 'none' : 'start',
              flexDirection: 'column',
            }}
          >
            {index === 0 && (
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ marginTop: '-5px' }} className="marginLine">
                  <LineRight width={'60%'} />
                </Box>
                <Box id="projects" className="titleContents">
                  PROJETOS<strong>.</strong>
                </Box>
              </Box>
            )}
            <Box className="circleProject" />
            <Box className="circleProject2" />
            <Box className="containerProject">
              <Box className="wrapperProject">
                <Box className="leftTech">
                  <Box className="wrapperCard">
                    <CardTech
                      icon="screenShare"
                      name="visitar"
                      isDisabled={!project.view_project}
                      onClick={() =>
                        window.open(project.view_project ?? '', '_blank')
                      }
                    >
                      <ScreenShareIcon className="screenShare" />
                    </CardTech>
                    <CardTech
                      icon="figma"
                      name="Protótipo"
                      isDisabled={!project.figma_link}
                      onClick={() =>
                        window.open(project.figma_link ?? '', '_blank')
                      }
                    />
                    <CardTech
                      name="Github"
                      isDisabled={!project.github_link}
                      onClick={() =>
                        window.open(project.github_link ?? '', '_blank')
                      }
                    >
                      <GitHubIcon className="githubIcon" />
                    </CardTech>
                  </Box>
                </Box>
                <Box className="terminalView">
                  <Box
                    sx={{
                      margin: '0px 20px',
                      display: 'flex',
                      width: '93%',
                      height: '90%',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        margin: '2% 0px ',
                      }}
                    >
                      <ButtonsTerminal style={{ position: 'absolute' }} />
                      <Box className="titleProject">
                        <span className="titleProjectSymbol">~$</span>
                        <span>{project.title}</span>
                      </Box>
                    </Box>
                    <Box
                      sx={{ direction: 'ltr' }}
                      className={`imgTerminal imgTerminalInteractive ${project.imgClass}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Ampliar imagem do projeto ${project.title}`}
                      onClick={() => {
                        setSelectedImageClass(project.imgClass);
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setSelectedImageClass(project.imgClass);
                        }
                      }}
                    />
                  </Box>
                </Box>
                <Box className="rightTech">
                  <Box className="wrapperCard">
                    {project.tech?.map((card, index) => (
                      <CardTech key={index} name={card.name} icon={card.icon} />
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box className="describeProject">
                <span className="titleDescribe">{project.titleDescribe}</span>
                <Box className="describeProjectTextContainer">
                  <span
                    className="describeProjectText"
                    dangerouslySetInnerHTML={{
                      __html: project.describe,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        sx={{ scrollSnapAlign: isMobile ? 'none' : 'start', height: '80vh' }}
        className="fullScreen comingSoon"
      >
        <Box className="comingSoonText">
          EM BREVE:
          <strong
            style={{
              margin: '0px 10px',
              background: 'var(--terminal-theme)',
              padding: '5px 10px',
              borderRadius: '5px',
              color: 'var(--background-terminal)',
            }}
          >
            O SEU PROJETO AQUI
          </strong>
          ?
        </Box>
        <Box sx={{ bottom: '0' }} className="marginLine">
          <LineLeft width={'60%'} />
        </Box>
      </Box>
      <Dialog
        open={Boolean(selectedImageClass)}
        onClose={closePreview}
        keepMounted
        maxWidth="lg"
        fullWidth
        transitionDuration={{ appear: 20, enter: 20, exit: 60 }}
        aria-labelledby="project-image-preview"
        sx={{
          '& .MuiDialog-paper': {
            margin: 0,
            width: 'min(96vw, 1400px)',
            maxWidth: '96vw',
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: '16px',
            overflow: 'hidden',
          },
        }}
      >
        <Box className="projectImageDialog">
          <IconButton
            onClick={closePreview}
            className="projectImageCloseButton"
            aria-label="Fechar imagem ampliada"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          {selectedImageSrc && (
            <img
              src={selectedImageSrc}
              alt="Preview ampliado do projeto"
              className="projectImagePreviewImage"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
}
