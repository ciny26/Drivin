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
