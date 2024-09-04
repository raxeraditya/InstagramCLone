import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="sub-section">
        <div className="home">
          <FaHome size={25} className="sidebar-logo" />
        </div>
        <Link to={"/"} className="font-semibold sidebar-link">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Home;
