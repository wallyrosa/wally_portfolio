import { ReactNode } from 'react';
import { goTo } from '../../../hooks/goTo';
import { useClickTouch } from '../../../hooks/onClickTouch';

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

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    goTo(props?.to);
  };

  const { onTouchStart, onTouchEnd } = useClickTouch(handleClick);

  return (
    <div
      id="anchor"
      style={style}
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="buttonTransparent"
    >
      {props?.children}
    </div>
  );
}
