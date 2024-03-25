import styled from "styled-components";

type PrincipeProps = {
    data: string;
    itemImg?:string
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

const imagedItem = ({ data , itemImg }: PrincipeProps) => {
    return (
        <PrincipeItm>
            <PrincipeImg src={itemImg} alt="Right Symbol" /> {/* Render image with src attribute */}
            <Principetext>{data}</Principetext>
        </PrincipeItm>
    );
};

export default imagedItem;
