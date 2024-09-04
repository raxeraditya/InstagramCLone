import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="sub-section">
        <div className="profile-img">
          <FaUserCheck size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
