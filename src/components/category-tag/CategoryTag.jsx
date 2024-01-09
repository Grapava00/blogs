import PropTypes from "prop-types";

function CategoryTag({ category }) {
  return (
    <li
      className='category-tag'
      style={{
        color: category.text_color,
        background: category.background_color,
      }}
    >
      {category.title}
    </li>
  );
}

CategoryTag.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    background_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryTag;
