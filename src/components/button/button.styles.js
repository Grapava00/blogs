import styled from "styled-components";

export const StyledButton = styled.button`
  padding: ${(props) => props.padding || "10px 20px"};
  display: ${(props) => props.display || "block"};
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background: #5d37f3;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:disabled {
    background: #e4e3eb;
    color: #fff;
  }
`;
