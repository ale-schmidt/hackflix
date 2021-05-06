import React from "react";
import Rating from "react-rating";

function StarRating({ setRate, rate }) {
  const handleChange = (value) => {
    console.log(value);
    console.log(rate);
    if (value === rate) {
      setRate(0);
    } else {
      setRate(value);
    }
  };

  return (
    <div>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        onClick={handleChange}
        initialRating={rate}
      />
    </div>
  );
}

export default StarRating;
