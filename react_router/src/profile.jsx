import { Link, Outlet } from "react-router-dom";
import "./pro.css";

const Profile = () => {
  return (
    <div className="profile">
      <h1>Hello from profile page!</h1>
      <Outlet />
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>

      {/* Updated to root as 'DefaultProfile' path might be incorrect */}
    </div>
  );
};

export default Profile;
