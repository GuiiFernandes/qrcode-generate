import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 600px;
  background-color: var(--white);
  padding: 40px 20px;
  gap: 20px;
  max-height: 80vh;
  overflow-y: scroll;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Btn = styled.button`
  margin: 5px;
  padding: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  background: var(--dark-blue);
  color: var(--light-gray);
  font-weight: bold;
  width: 85px;
  cursor: pointer;
  &:hover {
    background-color: var(--light-blue);
    color: var(--dark-blue);
  }
`;

export const H1 = styled.h1`
  color: var(--dark-blue);
`;
