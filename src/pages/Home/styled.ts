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
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const H1 = styled.h1`
  color: var(--dark-blue);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  background: transparent;
  width: 100%;
`;

export const Btn = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  background: var(--dark-blue);
  color: var(--light-gray);
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--light-blue);
    color: var(--dark-blue);
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-blue);
  padding: 20px;
  height: 240px;
  width: 240px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const P = styled.p`
  color: var(--white);
  text-align: center;
  width: 100%;
`;
