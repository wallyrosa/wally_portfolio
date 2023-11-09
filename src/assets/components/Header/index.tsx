import { Grid } from "@mui/material";
import { LineStyle } from "../../common/lines/LineStyle";
import { ButtonTransparent } from "../../common/buttons/ButtonTransparent";

export function Header() {
    return (
      <header className="header">
        <LineStyle>
          <Grid container>
            <Grid item xs={4}>
              <ButtonTransparent width={"auto"}>Contato</ButtonTransparent>
            </Grid>
            <Grid item xs={4}>
              <ButtonTransparent width={"auto"}>Sobre min</ButtonTransparent>
            </Grid>
            <Grid item xs={4}>
              <ButtonTransparent width={"auto"}>Tecnologias</ButtonTransparent>
            </Grid>
          </Grid>
        </LineStyle>
      </header>
    );
}