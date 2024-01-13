import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background: #5d37f3;
  border: none;
  cursor: pointer;
  &:disabled {
    background: #e4e3eb;
    color: #e4e3eb;
  }
`;
