import { Box } from '@mui/material'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { CardTech } from '../../../common/cards/CardTech';

export function SmallTerminal() {
    return (
      <Box className="terminalSmall">
        <Box className="buttonsTerminal" />
        <Box className="contentTerminalSmall">
          <CardTech scale="1.5" name="Github" icon="github">
            <GitHubIcon className="github" />
          </CardTech>
          <CardTech scale="1.5" name="Linkedin" icon="linkedin">
            <LinkedInIcon className="linkedin" />
          </CardTech>
          <CardTech scale="1.5" name="Whatsapp" icon="whatsapp">
            <WhatsAppIcon className="whatsapp" />
          </CardTech>
        </Box>
      </Box>
    );
}