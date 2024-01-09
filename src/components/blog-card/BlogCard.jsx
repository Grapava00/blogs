import PropTypes from "prop-types";
import CategoryTag from "../category-tag/CategoryTag";
import { Link } from "react-router-dom";

function BlogCard({ blog, passId, showFullBlogIcon }) {
  return (
    <article className='blog-card'>
      <img src={blog.image} alt='Blog Cover' className='blog-cover' />
      <div className='blog-content'>
        <h3>{blog.author}</h3>
        <time dateTime={blog.publish_date}>{blog.publish_date}</time>
        <h2>{blog.title}</h2>
        <ul className='category-list'>
          {blog.categories.map((category) => (
            <CategoryTag key={category.title} category={category} />
          ))}
        </ul>
        <p className='description'>{blog.description}</p>
        <Link to='/blog' onClick={() => passId(blog.id)}>
          სრულად ნახვა
          <img src={showFullBlogIcon} alt='show full blog icon' />
        </Link>
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
  passId: PropTypes.func.isRequired,
  showFullBlogIcon: PropTypes.string.isRequired,
};

export default BlogCard;
