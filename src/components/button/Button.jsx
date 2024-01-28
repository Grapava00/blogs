import PropTypes from "prop-types";
import { StyledButton } from "./button.styles";

function Button({ children, className, disabled, onClick, padding, display }) {
  return (
    <StyledButton
      padding={padding}
      onClick={onClick}
      disabled={disabled}
      className={className}
      display={display}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  padding: PropTypes.string,
  display: PropTypes.string,
};

export default Button;
