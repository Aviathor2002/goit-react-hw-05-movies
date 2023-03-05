import { Link } from 'react-router-dom';
import { PATH } from 'router/Path';
const ErrorPage = () => {
  return (
    <>
      <h1>Error 404, page not found</h1>
      <Link to={PATH.Home}>Go to homepage</Link>
    </>
  );
};

export default ErrorPage;
