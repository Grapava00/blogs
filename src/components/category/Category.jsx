import PropTypes from "prop-types";
import "./category.styles";
function Category({ title, textColor, backgroundColor, handleCategoryClick }) {
  return (
    <li
      onClick={handleCategoryClick}
      className='category'
      style={{
        color: textColor,
        background: backgroundColor,
      }}
    >
      {title}
    </li>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default Category;
