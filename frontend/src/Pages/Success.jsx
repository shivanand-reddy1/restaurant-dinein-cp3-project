import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
  return (
    <section className="success-page">
      <div className="container">
        <h1>Reservation Submitted Successfully!</h1>
        <p>Thank you for choosing Dine District. We have received your reservation request and look forward to welcoming you.</p>
        <Link to={'/'}>
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;