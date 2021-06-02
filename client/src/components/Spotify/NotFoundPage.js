import React from 'react';
import { Link } from 'react-router-dom';
import Header from './SpotifyHeader';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      Page not found. Goto <Link to="/spotify">Home Page</Link>
    </React.Fragment>
  );
};

export default NotFoundPage;