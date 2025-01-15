import React from "react";
import { Link } from "react-router";

const BackButton = () => {
  return (
    <div className="absolute z-10 top-4 left-4">
      <Link to={"/"}>⬅️</Link>
    </div>
  );
};

export default BackButton;
