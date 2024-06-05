import { Link } from "react-router-dom";

const Spinach = () => {
  return (
    <>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <Link to="/">Click here to go back</Link>
      <p>the second link</p>
      <Link to="/profile/popeye">Popeye</Link>
    </>
  );
};

export default Spinach;
