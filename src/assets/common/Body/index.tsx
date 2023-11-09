import { ReactNode } from "react"

interface BodyProps {
    children?: ReactNode
}

export function Body(props: BodyProps) {
    return (
        <div className="bodyElement">
            {props?.children}
        </div>
    )
}