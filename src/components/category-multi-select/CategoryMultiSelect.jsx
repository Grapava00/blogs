import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { UseAppData } from "../../context/ContextProvider";

const CategoryMultiSelect = ({
  handleCategoriesId,
  handlecategoryExistence,
}) => {
  const { categories } = UseAppData();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const options = categories.map((category) => ({
    value: category.id,
    label: category.title,
  }));

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
      <Select
        defaultValue=''
        isMulti
        name='categories'
        options={options}
        className='basic-multi-select'
        classNamePrefix='select'
        onChange={handleCategoryChange}
        value={selectedCategories}
      />
    </>
  );
};

CategoryMultiSelect.propTypes = {
  handleCategoriesId: PropTypes.func.isRequired,
  handlecategoryExistence: PropTypes.func.isRequired,
};

export default CategoryMultiSelect;
