import PropTypes from "prop-types";
import BlogCard from "../blog-card/BlogCard";
import { StyledBlogList } from "./blogList.styles";

function BlogList({ blogsData, passId, showFullBlogIcon }) {
  return (
    <StyledBlogList>
      {Array.isArray(blogsData) &&
        blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            passId={passId}
            showFullBlogIcon={showFullBlogIcon}
            isLinkVisible={true}
          />
        ))}
    </StyledBlogList>
  );
}

BlogList.propTypes = {
  blogsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  passId: PropTypes.func.isRequired,
  showFullBlogIcon: PropTypes.string.isRequired,
};

export default BlogList;
