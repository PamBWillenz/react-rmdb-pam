/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage";
// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";
// Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;