import styled from "styled-components";

export const CoverContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 1287px) {
    margin-top: 64px;
  }
`;

export const CoverTitle = styled.h1`
  color: #1a1a1f;
  font-size: 32px;
  font-weight: 700;

  @media (min-width: 1287px) {
    font-size: 64px;
  }
`;

export const CoverImage = styled.img`
  width: 240px;

  @media (min-width: 1287px) {
    width: 1024px;
  }
`;
