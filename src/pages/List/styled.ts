import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-blue);
  padding: 20px;
  padding-top: 25px;
  gap: 10px;
  width: 240px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-gray);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid var(--light-gray);
`;

export const P = styled.p`
  overflow-x: scroll;
  white-space: nowrap;
  max-width: 80%;
`;

export const ContainerBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red);
  background-color: transparent;
  padding: 5px;
  height: 40px;
  width: 40px;
  font-size: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    color: var(--dark-red);
  }
`;
