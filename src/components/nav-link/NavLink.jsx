import PropTypes from "prop-types";
import { StyledLink } from "./navLink.styles";

function NavLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
