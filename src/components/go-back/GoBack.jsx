import PropTypes from "prop-types";
import NavLink from "../nav-link/NavLink";
import { GoBackArrow } from "./goBack.styles";

function GoBack({ arrow }) {
  return (
    <GoBackArrow>
      <NavLink to='/'>
        <img src={arrow} alt='go back arrow' className='go-back-arrow' />
      </NavLink>
    </GoBackArrow>
  );
}

GoBack.propTypes = {
  arrow: PropTypes.string.isRequired,
};

export default GoBack;
