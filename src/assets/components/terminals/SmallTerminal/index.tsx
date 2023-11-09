import { Box } from '@mui/material'

export function SmallTerminal() {
    return (
      <Box className="terminalSmall">
        <div className="buttonsTerminal" />
        <div className="contentTerminalSmall">
          <div className="gitlab_icon">
            <div className="backGit gitlab_icon" />
          </div>
          <div className="linkedin_icon">
            <div className="backLinkedin linkedin_icon" />
          </div>
          <div className="wpp_icon">
            <div className="backWpp wpp_icon" />
          </div>
        </div>
      </Box>
    );
}