import { Box } from '@mui/material';
import { colorCard } from '../colorCard';
import { syledCardTech } from './cardTech.tyled';
import { ReactNode } from 'react';
import { useClickTouch } from '../../../hooks/onClickTouch';

interface CardTechProps {
  name?: string;
  icon?: string;
  children?: ReactNode;
  onClick?: () => void;
  scale?: string;
  isDisabled?: boolean;
}

export function CardTech(props: CardTechProps) {
  const { color, gradient } = colorCard(props?.icon);
  const { CardTech, WrapperCard, NameCardTech } = syledCardTech({
    color,
    scale: props?.scale,
    gradient,
    isDisabled: props?.isDisabled,
  });

  const handleClick = () => {
    if (props?.isDisabled) return;
    props?.onClick?.();
  };

  const { onTouchStart, onTouchEnd } = useClickTouch(handleClick);

  return (
    <CardTech
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <WrapperCard>
        {props.children ? (
          props.children
        ) : (
          <Box className={`imgCardTech ${props?.icon}`} />
        )}
      </WrapperCard>
      <NameCardTech>{props?.name}</NameCardTech>
    </CardTech>
  );
}
