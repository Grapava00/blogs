import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import close from "../assets/close.svg";
import "./modalcontent.css";
import errorIcon from "../assets/error-icon.svg";
import successIcon from "../assets/success-icon.svg";
export default function ModalContent({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const token =
      "d843f82fa4b7c67fcafa5d878f862da170d9d93c1d09e6b8a8f6183a44b56289";

    // const response = await axios.get(
    //   "https://api.blog.redberryinternship.ge/api/blogs",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    // console.log(response);

    const response = await axios.post(
      "https://api.blog.redberryinternship.ge/api/login",
      {
        email: data.email,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 204) {
      setSuccess(true);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <img onClick={onClose} src={close} className='close-button' />

        <div>
          {!success ? (
            <>
              <h3 className='modal-heading'>შესვლა</h3>
              <p className='email-title'>ელ-ფოსტა</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className='email-login'
                  placeholder='Example@redberry.ge'
                  {...register("email", {
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@redberry\.ge$/i,
                      message: "ელ-ფოსტა არ მოიძებნა",
                    },
                  })}
                />

                {errors.email && (
                  <div className='error-container'>
                    <img
                      src={errorIcon}
                      className='error-icon'
                      alt='Error Icon'
                    />
                    <p className='error-message'>{errors.email.message}</p>
                  </div>
                )}
                <button className='enter-button'>შესვლა</button>
              </form>
            </>
          ) : (
            <div className='success-container'>
              <img
                src={successIcon}
                className='success-icon'
                alt='Success Icon'
              />
              <p className='success-message'>წარმატებული ავტორიზაცია</p>
              <button className='success-button' onClick={onClose}>
                კარგი
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
