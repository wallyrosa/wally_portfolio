import { ReactNode } from "react"

interface ButtonTransparentProps {
    onClick?: () => void
    width?: string
    height?: string
    children?: ReactNode
  to: string;
}

export function ButtonTransparent(props: ButtonTransparentProps) {
    const style = {
        width: `${props?.width ? props?.width : '100px'}`,
        height: `${props?.height ? props?.height : '35px'}`
    }
    
    function scrollToSection(elementId: any) {
      var element = document.querySelector(elementId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop
        });
      }
    }
    return (
      <div
        id="anchor"
        style={style}
        onClick={() => scrollToSection(props?.to)}
        className="buttonTransparent"
      >
        {props?.children}
      </div>
    );
}