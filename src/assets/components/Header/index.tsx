import { Box, Grid } from "@mui/material";
import { LineStyle } from "../../common/lines/LineStyle";
import { ButtonTransparent } from "../../common/buttons/ButtonTransparent";

export function Header() {
    return (
      <header id="header" className="header">
        <LineStyle grid={[1, 3, 8]}>
          <Grid container>
            <Grid sx={{margin: 'auto'}} item xs={2}>
              <Box className='logo' />
            </Grid>
            <Grid item xs={5}>
              <ButtonTransparent to={"#skills"} width={"auto"}>SKILLS</ButtonTransparent>
            </Grid>
            <Grid item xs={5}>
              <ButtonTransparent to={"#projects"} width={"auto"}>PROJETOS</ButtonTransparent>
            </Grid>
          </Grid>
        </LineStyle>
      </header>
    );
}