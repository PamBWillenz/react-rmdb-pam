import React from "react";
// Styles
import { Image } from "./Thumb.styles";

// eslint-disable-next-line react/prop-types
const Thumb = ({ image }) => (
  <div>
    <Image src={image} alt="movie-thumb" />
  </div>
);

export default Thumb;
