import React from "react";

const Rating = ({ count, rate }) => {
  return (
    <>
      <span className="badge badge-pill badge-primary">
        {rate}/{count}
      </span>
    </>
  );
};

export default Rating;
