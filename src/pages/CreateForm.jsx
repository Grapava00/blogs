import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BlogContext } from "../context/BlogContext";
import BlogDescriptionTextarea from "../components/blog-description-textarea/BlogDescriptionTextarea";
import BlogTitleInput from "../components/blog-title-input/BlogTitleInput";
import CategoryMultiSelect from "../components/category-multi-select/CategoryMultiSelect";
import DatePicker from "../components/date-picker/DatePicker";
import EmailInput from "../components/email-input/EmailInput";
import ImageInput from "../components/image-input/ImageInput";
import NameInput from "../components/name-input/NameInput";
import CreateSuccessModal from "../components/modals/create-success/CreateSuccessModal";
import Button from "../components/button/Button";

function CreateForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      author: "",
      title: "",
      description: "",
      publish_date: "",
      email: "",
    },
  });

  const { uploadBlog } = useContext(BlogContext);

  const [imageData, setImageData] = useState("");
  const [imageExist, setImageExist] = useState(false);
  const [categoriesId, setCategoriesId] = useState([]);
  const [categoryExist, setCategoryExist] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", imageData);
    formData.append("author", data.author);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("publish_date", data.publish_date);
    formData.append("categories", JSON.stringify(categoriesId));
    formData.append("email", data.email);

    await uploadBlog(formData);
  };

  const handleImageData = (data) => {
    setImageData(data);
    setImageExist(true);
  };

  const handleImageExistence = () => {
    setImageExist(false);
  };

  const handleCategoriesId = (ids) => {
    setCategoriesId(ids);
    setCategoryExist(true);
  };

  const handlecategoryExistence = () => {
    setCategoryExist(false);
  };

  const renderSubmitButton = () => {
    const isButtonDisabled =
      !isDirty || !isValid || !imageExist || !categoryExist;

    return (
      <div className='submit-button'>
        <Button padding='10px 95px' disabled={isButtonDisabled}>
          გამოქვეყნება
        </Button>
      </div>
    );
  };

  return (
    <div className='form-container'>
      <form className='form-content' onSubmit={handleSubmit(onSubmit)}>
        <div className='inputs-wrapper'>
          <ImageInput
            handleImageData={handleImageData}
            handleImageExistence={handleImageExistence}
          />
          <div className='wrapper'>
            <NameInput register={register} watch={watch} />
            <BlogTitleInput register={register} watch={watch} />
          </div>
          <BlogDescriptionTextarea register={register} watch={watch} />
          <div className='wrapper'>
            <DatePicker register={register} />
            <CategoryMultiSelect
              register={register}
              handleCategoriesId={handleCategoriesId}
              handlecategoryExistence={handlecategoryExistence}
            />
          </div>
          <EmailInput register={register} errors={errors} />

          {renderSubmitButton()}
        </div>
        {isSubmitSuccessful && <CreateSuccessModal />}
      </form>
    </div>
  );
}

export default CreateForm;
