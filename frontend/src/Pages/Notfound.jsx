// In frontend/src/Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='notFound'>
      <h1>404 | Page Not Found</h1>
      <Link to={'/'}>Back to Home</Link>
    </section>
  );
};

export default NotFound;