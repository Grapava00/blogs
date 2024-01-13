import PropTypes from "prop-types";

function Button({ children, className, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
