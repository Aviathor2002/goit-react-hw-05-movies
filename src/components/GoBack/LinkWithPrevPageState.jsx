import { Link, useLocation } from 'react-router-dom';

const LinkWithPrevPageState = props => {
  const { children } = props;
  const location = useLocation();

  return (
    <Link {...props} state={{ prevPage: location.pathname }}>
      {children}
    </Link>
  );
};

export default LinkWithPrevPageState;
