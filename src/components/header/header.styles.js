import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 28px 76px;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: end;
    gap: 0;
  }
`;
