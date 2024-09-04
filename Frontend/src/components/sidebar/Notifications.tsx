import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <div>
      {" "}
      <div className="sub-section" id="hidden2">
        <div className="notification sidebar-logo">
          <FaRegHeart size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Notification
        </Link>
      </div>
    </div>
  );
};

export default Notifications;
