import styled from "styled-components";

export const StyledArticle = styled.article`
  max-width: ${(props) => props.width || "408px"};
  width: 100%;
`;

export const StyledBlogCoverImg = styled.img`
  width: 100%;
  height: 328px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;

  @media (min-width: 1287px) {
    margin-bottom: 24px;
  }
`;

export const StyledGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledBlogAuthor = styled.h3`
  color: #1a1a1f;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledBlogPublishDate = styled.time`
  color: #85858d;
  font-size: 12px;
  font-weight: 400;
`;

export const StyledBlogTitle = styled.h2`
  color: #1a1a1f;
  font-size: 20px;
  font-size: ${(props) => props.size || "20px"};
  font-weight: 500;
`;

export const StyledBlogCategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 3px;
`;

export const StyledBlogDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) =>
    props.title === "Full description" ? "unset" : "2"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;
