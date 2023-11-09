import { Box } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Terminal() {
  const hellow = useTypewriter({
    words: ['Olá, tudo bem?'],
    loop: undefined,
    typeSpeed: 50
  })
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
      <div className="topTerminal">
        <div className="buttonsTerminal" />
        <button className="buttonAbaTerminal">~/welcome</button>
        <button className="buttonAbaTerminal">~/about_me</button>
        <button className="moreButton"></button>
      </div>
      <div className="contentTerminal">
        <div className="columnNumber">
          <ul>1</ul>
          <ul>2</ul>
          <ul>3</ul>
          <ul>4</ul>
          <ul>5</ul>
        </div>
        <div className="textAreaTerminal">
          <strong className="titleTerminal">{"wally@wally: ~$ "}</strong>
          {hellow[0]}
          {myNameIs[0]}
          <strong className="nameTerminal">{name[0]}</strong>
          {welcome[0]}
          <Cursor />
        </div>
      </div>
    </Box>
  );
}
