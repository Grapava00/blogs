import PropTypes from "prop-types";
import NavLink from "../nav-link/NavLink";
import Category from "../category/Category";
import { hexToRGBA } from "../../utils/colorUtils";
import {
  StyledArticle,
  StyledBlogCoverImg,
  StyledGroupDiv,
  StyledBlogAuthor,
  StyledBlogPublishDate,
  StyledBlogTitle,
  StyledBlogCategoryList,
  StyledBlogDescription,
} from "./blogCard.styles";

function BlogCard({
  blog,
  passId,
  showFullBlogIcon,
  isLinkVisible,
  showFullDescription,
  fontSize,
  maxWidth,
}) {
  return (
    <StyledArticle width={maxWidth}>
      <StyledBlogCoverImg src={blog.image} alt='Blog Cover' />
      <StyledGroupDiv>
        <div>
          <StyledBlogAuthor>{blog.author}</StyledBlogAuthor>
          <StyledBlogPublishDate>{blog.publish_date}</StyledBlogPublishDate>
        </div>
        <StyledBlogTitle size={fontSize}>{blog.title}</StyledBlogTitle>
        <StyledBlogCategoryList>
          {blog.categories.map((category) => (
            <Category
              key={category.title}
              title={category.title}
              textColor={category.background_color}
              backgroundColor={hexToRGBA(category.background_color)}
            />
          ))}
        </StyledBlogCategoryList>
        <StyledBlogDescription
          title={
            showFullDescription ? "Full description" : "Truncated description"
          }
        >
          {blog.description}
        </StyledBlogDescription>
        {isLinkVisible && (
          <NavLink to='/blog' onClick={() => passId(blog.id)}>
            სრულად ნახვა
            <img src={showFullBlogIcon} alt='show full blog icon' />
          </NavLink>
        )}
      </StyledGroupDiv>
    </StyledArticle>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publish_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text_color: PropTypes.string.isRequired,
        background_color: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  passId: PropTypes.func,
  showFullBlogIcon: PropTypes.string,
  isLinkVisible: PropTypes.bool.isRequired,
  className: PropTypes.string,
  showFullDescription: PropTypes.bool,
  fontSize: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default BlogCard;
