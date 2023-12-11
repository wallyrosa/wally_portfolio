import { Box } from '@mui/material';
import { LineRight } from '../../../../common/lines/LineRight';
import { LineLeft } from '../../../../common/lines/LineLeft';
import { projects } from './projects';
import { CardTech } from '../../../../common/cards/CardTech';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ButtonsTerminal } from '../../../../common/buttons/ButtonsTerminal';

export function ContentProject() {
  return (
    <>
      {projects?.map((project, index) => (
        <Box
          sx={{ flexDirection: 'column' }}
          className="fullScreen"
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'center',
              scrollSnapAlign: 'start',
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
            <Box
              sx={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box className="wrapperProject">
                <Box className="leftTech">
                  <Box className="wrapperCard">
                    <CardTech
                      icon="screenShare"
                      name="projeto"
                      onClick={() =>
                        window.open(project.view_project, '_blank')
                      }
                    >
                      <ScreenShareIcon className="screenShare" />
                    </CardTech>
                    <CardTech
                      icon="figma"
                      name="Protótipo"
                      onClick={() => window.open(project.figma_link, '_blank')}
                    />
                    <CardTech
                      name="Github"
                      onClick={() => window.open(project.github_link, '_blank')}
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
                      height: '95%',
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
                      <Box className="titleProject">{project.title}</Box>
                    </Box>
                    <Box
                      sx={{ direction: 'ltr' }}
                      className={`imgTerminal ${project.imgClass}`}
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
              <Box className="describeProject">{project.describe}</Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        sx={{ scrollSnapAlign: 'start', height: '80vh' }}
        className="fullScreen comingSoon"
      >
        <Box></Box>
        <Box>
          EM BREVE<strong>.</strong>
        </Box>
        <Box sx={{ bottom: '0' }} className="marginLine">
          <LineLeft width={'60%'} />
        </Box>
      </Box>
    </>
  );
}
