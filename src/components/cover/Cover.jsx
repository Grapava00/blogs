import { CoverContainer, CoverTitle, CoverImage } from "./cover.styles";
import PropTypes from "prop-types";

function Cover({ title, image }) {
  return (
    <CoverContainer>
      <CoverTitle>{title}</CoverTitle>
      <CoverImage src={image} alt='cover' />
    </CoverContainer>
  );
}

Cover.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cover;
