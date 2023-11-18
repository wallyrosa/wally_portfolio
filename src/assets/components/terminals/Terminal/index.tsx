import { Box } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from 'react';

export function Terminal() {
  const [teste, setTeste] = useState(true);
  const hellow = useTypewriter({
    words: ["Olá, tudo bem?"],
    loop: undefined,
    typeSpeed: 50,
  });
  const about = useTypewriter({
    words: ["KKKK ta bão man???"],
    loop: undefined,
    typeSpeed: 50,
  });
  const myNameIs = useTypewriter({
    words: ["              meu nome é"],
    loop: undefined,
    typeSpeed: 50,
  });
  const name = useTypewriter({
    
    // eslint-disable-next-line no-template-curly-in-string
    words: ["                        ${Wallysson}ㅤㅤ"],
    loop: undefined,
    typeSpeed: 50,
  });
  const welcome = useTypewriter({
    words: ["                                     bem vindo ao meu portfólio :)"],
    loop: undefined,
    typeSpeed: 50,
  });
  return (
    <Box className="terminal">
      <Box className="topTerminal">
        <Box className="buttonsTerminal" />
        <button className="buttonAbaTerminal" onClick={() => setTeste(!teste)}>
          ~/welcome
        </button>
        <button className="buttonAbaTerminal">~/about_me</button>
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
        {teste ? (
          <Box className="textAreaTerminal">
            <strong className="titleTerminal">{"wally@wally: ~$ "}</strong>
            {hellow[0]}
            {myNameIs[0]}
            <strong className="nameTerminal">{name[0]}</strong>
            {welcome[0]}
            <Cursor />
          </Box>
        ) : (
          <Box className="textAreaTerminal">
            <strong className="titleTerminal">{"wally@wally: ~$ "}</strong>
            <p className="typingAnimation">
              Meu nome é Wallysson sou dev Frontend, tenho experiência atual de
              2 anos como dev e experiência em trabalhar em projetos com metodos
              ágeis como Scrum e Kanban.
            </p>
          </Box>
        )}
      </Box>
    </Box>
  );
}
