import styled from 'styled-components';

export const StyledBtn = styled.button`
  background-color: #ffc107; /* Yellow color */
  color: #fff;
  height:70px;
  padding: 10px 20px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 1s ease; /* Smooth transition effect */

  &:hover {
    background-color: #6a1b9a; /* Purple color */
  }
`;

export const CloseBtn = styled(StyledBtn)`
height: 50px;
font-size:1rem;
padding: 2px 10px;
background-color: red; /* Purple color */
&:hover {
background-color:red 
}
`