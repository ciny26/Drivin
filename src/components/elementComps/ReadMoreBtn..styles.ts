import styled from 'styled-components';

export const ReadMoreBtn = styled.button`
  background-color: transparent; /* Yellow color */
  color: #ffc107;
  height:70px;
  border: #ffc107 5px solid;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color .4s ease; /* Smooth transition effect */

  &:hover {
    background-color: orange; 
    color:white
  }
`;
