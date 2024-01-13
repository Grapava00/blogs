import styled from "styled-components";

export const StyledRelatedArticlesContainer = styled.div`
  margin-top: 96px;
  padding: 0 76px;
`;

export const StyledRelatedArticlesTopBar = styled.div`
  display: none;

  @media (min-width: 1287px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const StyledRelatedArticlesTitle = styled.h3`
  color: #1a1a1f;
  font-size: 32px;
  font-weight: 700;
`;

export const StyledRelatedArticlesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;
