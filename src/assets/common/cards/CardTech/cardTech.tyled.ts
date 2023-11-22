import styled from "styled-components";

interface syledCardTechProps {
    color: string;
    scale?: string;
}
export const syledCardTech = (props: syledCardTechProps) => {
    console.log('scale: ', props.scale)

    const CardTech = styled.div`
        width: 60px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin: 10px 0px;
        transform: scale(${props?.scale ? props.scale : '1'});
        @media (max-width: 1600px) {
        width: 30px
        }
    `;
    const WrapperCard = styled.div`
        width: 60px;
        height: 60px;
        border: solid 5px ${props.color};
        box-shadow: 0px 0px 3px 0px ${props.color};
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 1600px) {
        width: 40px;
        height: 40px;
        border: solid 3px ${props.color};
        box-shadow: 0px 0px 3px 0px ${props.color};
        }
    `;
    const NameCardTech = styled.div`
        width: 120px;
        height: auto;
        margin: 5px 0px;
        flex-shrink: 0;
        color: var(--font-color-main);
        text-align: center;
        font-family: "Jura";
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
    `;

    return {CardTech, NameCardTech, WrapperCard}
}