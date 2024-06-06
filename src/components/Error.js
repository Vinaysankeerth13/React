import React from 'react';
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  const errorMessage = error?.statusText || 'An error occurred.';
  const errorCode = error?.status || 'Unknown';

  return (
    <div className="error-container">
      <h1>“I'd like to think I'm a great website but seems like I'm not.”</h1>
      <p>Error code: {errorCode}</p>
      <p>Error message: {errorMessage}</p>
      {errorCode === 404 && <p>The page you requested could not be Cooked.</p>}
      <Link to="/" onClick="/" style={{ textDecoration: "none", color: "#FF7D29" }}>Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
