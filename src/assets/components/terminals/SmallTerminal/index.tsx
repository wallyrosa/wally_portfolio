import { Box } from '@mui/material'

export function SmallTerminal() {
    return (
      <Box className="terminalSmall">
        <Box className="buttonsTerminal" />
        <Box className="contentTerminalSmall">
          <Box className="gitlab_icon">
            <Box className="backGit gitlab_icon" />
          </Box>
          <Box className="linkedin_icon">
            <Box className="backLinkedin linkedin_icon" />
          </Box>
          <Box className="wpp_icon">
            <Box className="backWpp wpp_icon" />
          </Box>
        </Box>
      </Box>
    );
}