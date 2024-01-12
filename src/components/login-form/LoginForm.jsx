import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import errorIcon from "../../assets/error-icon.svg";

function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data.email);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h3 className='modal__heading'>შესვლა</h3>
      <p className='modal__email-title'>ელ-ფოსტა</p>
      <input
        className='modal__email-login'
        placeholder='Example@redberry.ge'
        {...register("email", {
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/i,
            message: "ელ-ფოსტა არ მოიძებნა",
          },
        })}
      />
      {errors.email && (
        <div className='modal__error-container'>
          <img src={errorIcon} className='modal__error-icon' alt='Error Icon' />
          <p className='modal__error-message'>{errors.email.message}</p>
        </div>
      )}
      <button className='modal__enter-button' type='submit'>
        შესვლა
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
