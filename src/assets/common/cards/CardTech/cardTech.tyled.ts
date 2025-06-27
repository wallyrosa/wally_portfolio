import styled from 'styled-components';

interface syledCardTechProps {
  color: string;
  scale?: string;
  gradient?: string;
  isDisabled?: boolean;
}
export const syledCardTech = (props: syledCardTechProps) => {
  const WrapperCard = styled.div`
    width: 60px;
    height: 60px;
    border-width: 5px;
    border-style: solid;
    border-color: ${props.color};
    border-image: ${props.gradient};
    box-shadow: 0px 0px 10px 0px ${props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1600px) {
      width: 40px;
      height: 40px;
      border-width: 3px;
      border-style: solid;
      border-color: ${props.color};
      border-image: ${props.gradient};
      box-shadow: 0px 0px 3px 0px ${props.color};
    }
    @media (max-width: 600px) {
      width: 40px !important;
      height: 40px !important;
    }
  `;

  const NameCardTech = styled.div`
    width: 120px;
    height: auto;
    margin: 5px 0px;
    flex-shrink: 0;
    color: var(--font-color-main);
    text-align: center;
    font-family: 'Jura';
    font-size: 17px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    transition: all 0.4s;
    @media (max-width: 1600px) {
      font-size: 13px;
      font-weight: 400;
      margin: 3px 0px;
    }
    @media (max-width: 600px) {
      width: 50px !important;
      margin-bottom: 12px !important;
      font-size: 10px !important;
    }
  `;

  const CardTech = styled.div`
    width: 60px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: ${props?.isDisabled ? 'not-allowed' : 'pointer'};
    opacity: ${props?.isDisabled ? 0.5 : 1};
    transform: scale(${props?.scale ? props.scale : '1'});
    transition: all 0.2s;
    &:hover {
      transform: scale(${props?.scale ? parseFloat(props.scale) + 0.1 : '1.1'});
    }
    @media (max-width: 1600px) {
      width: 30px;
    }
    @media (max-width: 600px) {
      height: 70px !important;
    }
  `;

  return { CardTech, NameCardTech, WrapperCard };
};
