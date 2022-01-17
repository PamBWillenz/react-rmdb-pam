import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Image } from "./Thumb.styles";
// eslint-disable-next-line react/prop-types
const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
