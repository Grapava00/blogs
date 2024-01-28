import PropTypes from "prop-types";
import { CategoryItem } from "./category.styles";
function Category({ title, textColor, backgroundColor, handleCategoryClick }) {
  return (
    <CategoryItem
      onClick={handleCategoryClick}
      style={{
        color: textColor,
        background: backgroundColor,
      }}
    >
      {title}
    </CategoryItem>
  );
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleCategoryClick: PropTypes.func,
};

export default Category;
