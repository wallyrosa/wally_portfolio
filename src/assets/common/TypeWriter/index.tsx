import { Box } from "@mui/material"
import { ReactNode } from "react"

interface TypeWriterProps {
  class?: string;
  children: ReactNode;
}

export function TypeWriter(props: TypeWriterProps) {
    function typingEffect(element: Element | null) {
        if(element){
            const textInArray = element?.innerHTML.split("");
            element.innerHTML = "";
            textInArray?.forEach((letter, index) => {
                setTimeout(() => {
                    element.innerHTML += letter;
                }, 75 * index);
            })
        }
    }
    typingEffect(document.querySelector("#typingComponent"));
    return (
      <Box id="typingComponent" className={`${props?.class}`}>
        {props.children}
      </Box>
    );
}