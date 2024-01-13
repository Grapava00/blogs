import styled from "styled-components";

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 32px 0 36px;

  @media (max-width: 1287px) {
    margin: 64px 0 72px;
  }
`;
