import PropTypes from "prop-types";
import Category from "../category/Category";
import { hexToRGBA } from "../../utils/colorUtils";
import { CategoriesList } from "./categories.styles";
function Categories({ categoriesData, handleCategoryClick }) {
  return (
    <CategoriesList>
      {Array.isArray(categoriesData) &&
        categoriesData.map((category) => (
          <Category
            key={category.title}
            title={category.title}
            textColor={category.background_color}
            backgroundColor={hexToRGBA(category.background_color)}
            handleCategoryClick={() => handleCategoryClick(category.title)}
          />
        ))}
    </CategoriesList>
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
