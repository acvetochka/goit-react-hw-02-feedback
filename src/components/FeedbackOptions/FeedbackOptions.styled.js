import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const ButtonFeedBack = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  background: transparent;
  color: white;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-shadow: 5px 5px 10px black;
  font-size: 18px;
  text-transform: capitalize;

  :hover {
    cursor: pointer;
    background: #44728f;
  }
`;
