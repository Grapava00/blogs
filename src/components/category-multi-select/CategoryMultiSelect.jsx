import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { UseAppData } from "../../context/ContextProvider";

const CategoryMultiSelect = ({ handleCategoriesId }) => {
  const { categories } = UseAppData();

  const options = categories.map((category) => ({
    value: category.id,
    label: category.title,
  }));

  const handleCategoryChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    handleCategoriesId(selectedIds);
  };

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
      />
    </>
  );
};

CategoryMultiSelect.propTypes = {
  handleCategoriesId: PropTypes.func.isRequired,
};

export default CategoryMultiSelect;
