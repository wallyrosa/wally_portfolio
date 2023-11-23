import { Box } from "@mui/material";
import { Cursor } from "react-simple-typewriter";
import { useEffect, useState } from 'react';
import { typeWriter } from "../../../hooks/typeWriter";
import { TypeWriter } from "../../../common/TypeWriter";
import { ButtonsTerminal } from "../../../common/buttons/ButtonsTerminal";

export function Terminal() {
  const [activeButton, setActiveButton] = useState(true);

  useEffect(() => {
    typeWriter(document.querySelector("#typing"));
  }, []);
  
  return (
    <Box className="terminal">
      <Box className="topTerminal">
        <ButtonsTerminal />
        <button
          className={`buttonAbaTerminal ${activeButton ? "active" : ""}`}
          onClick={() => setActiveButton(!activeButton)}
        >
          ~/welcome
        </button>
        <button
          className={`buttonAbaTerminal ${!activeButton ? "active" : ""}`}
          onClick={() => setActiveButton(!activeButton)}
        >
          ~/about_me
        </button>
        <a className="moreButton" href="#skills">
          <></>
        </a>
      </Box>
      <Box className="contentTerminal">
        <Box className="columnNumber">
          <ul>1</ul>
          <ul>2</ul>
          <ul>3</ul>
          <ul>4</ul>
          <ul>5</ul>
        </Box>
        {activeButton ? (
          <Box className="textAreaTerminal">
            <p className="titleTerminal">{"wally@wally: ~$ "}</p>
            <TypeWriter>
              Olá, tudo bem? Meu nome é Wallysson e sou desenvolvedor Frontend
            </TypeWriter>
            <Cursor />
          </Box>
        ) : (
          <Box className="textAreaTerminal">
            <p className="titleTerminal">{"wally@wally: ~$ "}</p>
            <TypeWriter>
              Meu nome é Wallysson sou dev Frontend, tenho experiência atual de
              2 anos como dev e experiência em trabalhar em projetos com metodos
              ágeis como Scrum e Kanban.
            </TypeWriter>
          </Box>
        )}
      </Box>
    </Box>
  );
}
