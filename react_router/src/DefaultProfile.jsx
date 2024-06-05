import React from "react";
import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <div>
      <h2>Default Profile Page</h2>
      <Link to="/">Click here to go back</Link>
    </div>
  );
};

export default DefaultProfile;
