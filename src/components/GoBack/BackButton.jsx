const { useLocation, Link } = require('react-router-dom');

const BackButton = ({ children }) => {
  const { state } = useLocation();

  if (!state || !state.prevPage) {
    return null;
  }

  return <Link to={state.prevPage}>{children}</Link>;
};

export default BackButton;
