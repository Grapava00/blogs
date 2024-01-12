import PropTypes from "prop-types";
import successIcon from "../../assets/success-icon.svg";

function SuccessMessage({ handleShowModal }) {
  return (
    <div className='modal__success-container'>
      <img
        src={successIcon}
        className='modal__success-icon'
        alt='Success Icon'
      />
      <p className='modal__success-message'>წარმატებული ავტორიზაცია</p>
      <button className='modal__success-button' onClick={handleShowModal}>
        კარგი
      </button>
    </div>
  );
}

SuccessMessage.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
};

export default SuccessMessage;
