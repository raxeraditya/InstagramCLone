import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div>
      <div className="sub-section">
        <IoReorderThreeOutline size={30} className="sidebar-logo" />
        <Link to={"/"} className="sidebar-link">
          More
        </Link>
      </div>
    </div>
  );
};

export default More;
