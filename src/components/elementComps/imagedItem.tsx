import styled from "styled-components";

type itemProps = {
    data: string;
    itemImg?:string
    onMouseEnter?: () => void; // Add onMouseEnter prop
    onMouseLeave?: () => void; // Add onMouseLeave prop
    isHighlited?:boolean
}

const TheItem = styled.div`
    display: flex;
    flex-direction: row; /* To ensure text and image stack vertically */
    align-items: center; /* Center items horizontally */
    width: 50%;
`;

const ItemText = styled.div`
    padding:10px;
`;

const ItemImg = styled.img`
    width: 20px; /* Define width of the image */
    height: 20px; /* Define height of the image */
`;

const imagedItem = ({ data , itemImg , onMouseEnter , onMouseLeave , isHighlited }: itemProps) => {
    return (
        <TheItem>
            <ItemImg className={isHighlited ? "" : ""} src={itemImg} alt="svg"
            onMouseEnter={onMouseEnter} // Call onMouseEnter function on mouse enter
            onMouseLeave={onMouseLeave} // Call onMouseLeave function on mouse leave
            /> {/* Render image with src attribute */}
            <ItemText>{data}</ItemText>
        </TheItem>
    );
};

export default imagedItem;
