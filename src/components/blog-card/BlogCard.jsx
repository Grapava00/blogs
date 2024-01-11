import PropTypes from "prop-types";
import CategoryTag from "../category-tag/CategoryTag";
import NavLink from "../nav-link/NavLink";

function BlogCard({
  blog,
  passId,
  showFullBlogIcon,
  isLinkVisible,
  className,
}) {
  return (
    <article>
      <img src={blog.image} alt='Blog Cover' />
      <div>
        <h3>{blog.author}</h3>
        <time dateTime={blog.publish_date}>{blog.publish_date}</time>
        <h2>{blog.title}</h2>
        <ul>
          {blog.categories.map((category) => (
            <CategoryTag key={category.title} category={category} />
          ))}
        </ul>
        <p>{blog.description}</p>
        {isLinkVisible && (
          <NavLink to='/blog' onClick={() => passId(blog.id)}>
            სრულად ნახვა
            <img src={showFullBlogIcon} alt='show full blog icon' />
          </NavLink>
        )}
      </div>
    </article>
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
};

export default BlogCard;
