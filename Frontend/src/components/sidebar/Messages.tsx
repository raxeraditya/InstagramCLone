import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div>
      <div className="sub-section">
        <div className="messages sidebar-logo">
          <RiMessage2Fill size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Messages
        </Link>
      </div>
    </div>
  );
};

export default Messages;
