import { ReactNode } from 'react';
import { goTo } from '../../../hooks/goTo';

interface ButtonTransparentProps {
  onClick?: () => void;
  width?: string;
  height?: string;
  children?: ReactNode;
  to: string;
}

export function ButtonTransparent(props: ButtonTransparentProps) {
  const style = {
    width: `${props?.width ? props?.width : '100px'}`,
    height: `${props?.height ? props?.height : '35px'}`,
  };

  return (
    <div
      id="anchor"
      style={style}
      onClick={() => goTo(props?.to)}
      className="buttonTransparent"
    >
      {props?.children}
    </div>
  );
}
