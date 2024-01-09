import PropTypes from "prop-types";
import Category from "../category/Category";
import "./categories.styles";
function Categories({ categoriesData, handleCategoryClick }) {
  return (
    <ul className='categories'>
      {Array.isArray(categoriesData) &&
        categoriesData.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            textColor={category.text_color}
            backgroundColor={category.background_color}
            handleCategoryClick={() => handleCategoryClick(category.title)}
          />
        ))}
    </ul>
  );
}

Categories.propTypes = {
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text_color: PropTypes.string.isRequired,
      background_color: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default Categories;
