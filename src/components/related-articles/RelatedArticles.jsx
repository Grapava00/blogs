import PropTypes from "prop-types";
import ArrowButton from "../arrow-button/ArrowButton";
import BlogCard from "../blog-card/BlogCard";
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
    <div className='related-articles'>
      <div className='related-articles-top'>
        <p>მსგავსი სტატიები</p>
        <div>
          <ArrowButton
            goNext={goNext}
            goPrev={goPrev}
            goNextArrow={goNextArrow}
            goPrevArrow={goPrevArrow}
          />
        </div>
      </div>
      <div className='related-articles-list'>
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
      </div>
    </div>
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
