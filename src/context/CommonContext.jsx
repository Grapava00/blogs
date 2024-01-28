import PropTypes from "prop-types";
import { AuthProvider } from "./AuthContext";
import { BlogProvider } from "./BlogContext";
import { CategoryProvider } from "./CategoryContext";

export const CommonProvider = ({ children }) => {
  return (
    <AuthProvider>
      <BlogProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </BlogProvider>
    </AuthProvider>
  );
};

CommonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
