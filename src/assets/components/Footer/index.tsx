import { Box } from "@mui/material";
import { LineStyle } from "../../common/lines/LineStyle";

export function Footer() {
  return (
    <footer className="footer">
      <Box
        sx={{
          width: "90%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Box className="textFooter">
          VAMOS
          <p className="strongTextFooter">
            TRABALHAR JUNTOS<strong>?</strong>
          </p>
        </Box>
        <LineStyle grid={[3, 6, 3]}>
          <Box className="textEmailFooter">
            Clique{" "}
            <p className="strongTextFooter">
              para o Email<strong>.</strong>
            </p>
          </Box>
        </LineStyle>
        <Box className="smallTextFooter">
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
            Este portfolio
            <p className="strongTextFooter">não foi</p> feito em
            cima de um <p className="strongTextFooter">template.</p>
          </Box>{" "}
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
          Criado por
          <p className="strongTextFooter">
            Wallysson Rosa<strong>.</strong>
          </p>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
