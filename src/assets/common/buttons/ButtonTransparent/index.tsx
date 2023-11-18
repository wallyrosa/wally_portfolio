import { ReactNode } from "react"

interface ButtonTransparentProps {
    onClick?: () => void
    width?: string
    height?: string
    children?: ReactNode
    href: string
}

export function ButtonTransparent(props: ButtonTransparentProps) {
    const style = {
        width: `${props?.width ? props?.width : '100px'}`,
        height: `${props?.height ? props?.height : '35px'}`
    }
    return (
      <a
        style={style}
        onClick={props?.onClick}
        className="buttonTransparent"
        href={props.href}
      >
        {props?.children}
      </a>
    );
}