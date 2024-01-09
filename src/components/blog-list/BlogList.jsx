import PropTypes from "prop-types";
import BlogCard from "../blog-card/BlogCard";

function BlogList({ blogsData, passId, showFullBlogIcon }) {
  return (
    <div className='blog-list'>
      {Array.isArray(blogsData) &&
        blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            passId={passId}
            showFullBlogIcon={showFullBlogIcon}
          />
        ))}
    </div>
  );
}

BlogList.propTypes = {
  blogsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  passId: PropTypes.func.isRequired,
  showFullBlogIcon: PropTypes.string.isRequired,
};

export default BlogList;
