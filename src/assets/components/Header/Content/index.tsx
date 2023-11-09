import { Header } from "..";
import { ShowPerfil } from "../../ShowPerfil";
import { Terminal } from "../../terminals/Terminal";

export function Content() {
    return (
      <>
        <div className="container">
          <Header />
          <div className="contentMain">
            <Terminal />
            <ShowPerfil />
          </div>
          <div className="lineStyleBottom ">
            <div className="cubleStyleLeft"></div>
            <div className="lineToStyleLeft"></div>
          </div>
            </div>
            <footer className="footer"></footer>
      </>
    );
}