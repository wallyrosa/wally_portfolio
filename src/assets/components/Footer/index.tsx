import { Box } from "@mui/material";
import { LineStyle } from "../../common/lines/LineStyle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";

export function Footer() {
  const [showHelper, setHelper] = useState<boolean>(false);
  function copy() {
    navigator.clipboard.writeText("wallysson.rosa12@gmail.com");
    setHelper(true)
    setTimeout(() => {
      setHelper(false)
    }, 2000)
  }
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
            <a href="mailto:wallysson.rosa12@gmmail.com">Me mande um email</a>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "9px",
              }}
            >
              <Box className="strongTextFooter">Ou copie e cole :D</Box>
              <ContentCopyIcon
                onClick={() => copy()}
                className="copyIcon"
              />
              {showHelper && <Box className="helperCopy">Copiado!</Box>}
            </Box>
          </Box>
        </LineStyle>
        <Box className="smallTextFooter">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Este portfolio
            <p className="strongTextFooter">não foi</p> feito em cima de um{" "}
            <p className="strongTextFooter">template.</p>
          </Box>{" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Criado por
            <p className="strongTextFooter">
              Wallysson da Silva Rosa<strong>.</strong>
            </p>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
