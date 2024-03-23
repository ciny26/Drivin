import styled from "styled-components";

type PrincipeProps = {
    principe:string
}
const PrincipeItm = styled.div`
    display: flex;
    width: 100px;
`;

const PrincipeItem = ({principe } : PrincipeProps)  => {
    return (
        <PrincipeItm>
                <div>{principe}</div>
        </PrincipeItm>
    );
};
 
export default PrincipeItem;
