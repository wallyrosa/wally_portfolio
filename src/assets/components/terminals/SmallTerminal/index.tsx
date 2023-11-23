import { Box } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CardTech } from '../../../common/cards/CardTech';
import { ButtonsTerminal } from '../../../common/buttons/ButtonsTerminal';

export function SmallTerminal() {
    return (
      <Box className="terminalSmall">
        <ButtonsTerminal style={{ marginBottom: "20px" }} />
        <Box className="contentTerminalSmall">
          <CardTech
            onClick={() =>
              window.open("https://github.com/wallyrosa", "_blank")
            }
            scale="1.3"
            name="Github"
            icon="github"
          >
            <GitHubIcon className="github" />
          </CardTech>
          <CardTech
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wallysson-da-silva-rosa-32b34b214/",
                "_blank"
              )
            }
            scale="1.3"
            name="Linkedin"
            icon="linkedin"
          >
            <LinkedInIcon className="linkedin" />
          </CardTech>
          <CardTech
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5562981103887&text=Ol%C3%A1%20Wallysson%2C%20acabei%20de%20dar%20uma%20olhada%20no%20seu%20portf%C3%B3lio%2C%20vamos%20conversar%3F",
                "_blank"
              )
            }
            scale="1.3"
            name="Whatsapp"
            icon="whatsapp"
          >
            <WhatsAppIcon className="whatsapp" />
          </CardTech>
        </Box>
      </Box>
    );
}