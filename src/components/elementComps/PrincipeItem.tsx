import styled from "styled-components";
import RightSvg from "../../assets/svgs/rightSymb.svg";

type PrincipeProps = {
    principe: string;
}

const PrincipeItm = styled.div`
    display: flex;
    flex-direction: row; /* To ensure text and image stack vertically */
    align-items: center; /* Center items horizontally */
    width: 50%;
`;

const Principetext = styled.div`
    padding:10px;
`;

const PrincipeImg = styled.img`
    width: 20px; /* Define width of the image */
    height: 20px; /* Define height of the image */
`;

const PrincipeItem = ({ principe }: PrincipeProps) => {
    return (
        <PrincipeItm>
            <PrincipeImg src={RightSvg} alt="Right Symbol" /> {/* Render image with src attribute */}
            <Principetext>{principe}</Principetext>
        </PrincipeItm>
    );
};

export default PrincipeItem;
