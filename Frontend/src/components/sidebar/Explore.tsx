import { MdExplore } from "react-icons/md";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div>
      <div className="sub-section">
        <div className="explore sidebar-logo">
          <MdExplore size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Explore;
