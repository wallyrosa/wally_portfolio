import { Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { ButtonsTerminal } from '../../../common/buttons/ButtonsTerminal';
import { goTo } from '../../../hooks/goTo';
import { isMobile } from 'react-device-detect';

export function Terminal() {
  const [activeButton, setActiveButton] = useState(true);

  return (
    <Box className="terminal">
      <Box className="topTerminal">
        <ButtonsTerminal />
        <button
          className={`buttonAbaTerminal ${activeButton ? 'active' : ''}`}
          onClick={() => {
            if (!activeButton) {
              setActiveButton(!activeButton);
            }
          }}
        >
          ~ welcome
        </button>
        <button
          className={`buttonAbaTerminal animationToWarning ${
            !activeButton ? 'active' : ''
          }`}
          onClick={() => {
            if (activeButton) {
              setActiveButton(!activeButton);
            }
          }}
        >
          ~ about_me
        </button>
        <div className="moreButton" onClick={() => goTo('#skills')}>
          <></>
        </div>
      </Box>
      <Box className="contentTerminal">
        <Box className="columnNumber">
          <ul>1</ul>
          <ul>2</ul>
          <ul>3</ul>
          <ul>4</ul>
          <ul>5</ul>
          {!activeButton && <ul>6</ul>}
          {!activeButton && <ul>7</ul>}
          {!activeButton && <ul>8</ul>}
          {!activeButton && <ul>9</ul>}
          {!activeButton && <ul>10</ul>}
          {!activeButton && <ul>11</ul>}
          {!activeButton && isMobile && <ul>12</ul>}
          {!activeButton && isMobile && <ul>13</ul>}
        </Box>
        {activeButton ? (
          <Box className="textAreaTerminal">
            <p className="titleTerminal">{'wally@wally: ~$ '}</p>
            <Typewriter
              options={{
                strings: [
                  'Olá, tudo bem? Meu nome é <strong>Wallysson</strong> e sou desenvolvedor <strong>Frontend</strong>. Bem vindo ao meu portfólio<strong>.</strong>',
                ],
                autoStart: true,
                delay: 35,
                loop: false,
                deleteSpeed: Number.POSITIVE_INFINITY,
              }}
            />
          </Box>
        ) : (
          <Box className="textAreaTerminal">
            <p className="titleTerminal">{'wally@wally: ~$ '}</p>
            <Typewriter
              options={{
                strings: [
                  'Olá! Meu nome é <strong>Wallysson</strong> e sou desenvolvedor <strong>Frontend</strong>, com foco em transformar ideias em interfaces intuitivas e visualmente atraentes. Tenho <strong>experiência com metodologias ágeis</strong> como <strong>Scrum</strong> e <strong>Kanban</strong>, o que me permite colaborar bem em equipe e entregar com eficiência.Abaixo, você pode conferir algumas das minhas <strong>hard skills</strong> e os <strong>projetos</strong> que desenvolvi ao longo da minha trajetória<strong>.</strong>',
                ],
                autoStart: true,
                delay: 35,
                deleteSpeed: Number.POSITIVE_INFINITY,
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
