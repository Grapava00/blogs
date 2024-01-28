import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { CategoryContext } from "../../context/CategoryContext";

const CategoryMultiSelect = ({
  handleCategoriesId,
  handlecategoryExistence,
}) => {
  const { categoriesData } = useContext(CategoryContext);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const options =
    categoriesData?.map((category) => ({
      value: category.id,
      label: category.title,
    })) ?? [];

  const handleCategoryChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setSelectedCategories(selectedOptions);
    handleCategoriesId(selectedIds);
  };

  useEffect(() => {
    if (selectedCategories.length <= 0) {
      handlecategoryExistence();
    }
  }, [selectedCategories, handlecategoryExistence]);

  return (
    <>
      <div className='input-container'>
        <h3 className='input__title'>კატეგორია *</h3>
        <Select
          defaultValue=''
          isMulti
          name='categories'
          options={options}
          className='input '
          classNamePrefix='select'
          onChange={handleCategoryChange}
          value={selectedCategories}
        />
      </div>
    </>
  );
};

CategoryMultiSelect.propTypes = {
  handleCategoriesId: PropTypes.func.isRequired,
  handlecategoryExistence: PropTypes.func.isRequired,
};

export default CategoryMultiSelect;
