import PropTypes from "prop-types";
import ArrowButton from "../arrow-button/ArrowButton";
import BlogCard from "../blog-card/BlogCard";
import {
  StyledRelatedArticlesList,
  StyledRelatedArticlesContainer,
  StyledRelatedArticlesTopBar,
  StyledRelatedArticlesTitle,
} from "./relatedArticles.styles";
function RelatedArticles({
  goNext,
  goPrev,
  goNextArrow,
  goPrevArrow,
  articles,
  passId,
  showFullBlogIcon,
  currentIndex,
}) {
  return (
    <StyledRelatedArticlesContainer>
      <StyledRelatedArticlesTopBar>
        <StyledRelatedArticlesTitle>
          მსგავსი სტატიები
        </StyledRelatedArticlesTitle>
        <div>
          <ArrowButton
            goNext={goNext}
            goPrev={goPrev}
            goNextArrow={goNextArrow}
            goPrevArrow={goPrevArrow}
          />
        </div>
      </StyledRelatedArticlesTopBar>
      <StyledRelatedArticlesList>
        {articles
          .slice(currentIndex, currentIndex + 3)
          .map((article, index) => {
            return (
              <BlogCard
                key={article.id || index}
                showFullBlogIcon={showFullBlogIcon}
                passId={passId}
                isLinkVisible={true}
                blog={article}
              />
            );
          })}
      </StyledRelatedArticlesList>
    </StyledRelatedArticlesContainer>
  );
}

RelatedArticles.propTypes = {
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
  goNextArrow: PropTypes.bool.isRequired,
  goPrevArrow: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
  passId: PropTypes.func.isRequired,
  showFullBlogIcon: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default RelatedArticles;
