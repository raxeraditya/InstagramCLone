import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const Reels = () => {
  return (
    <div>
      <div className="sub-section">
        <div className="reels sidebar-logo">
          <SiYoutubeshorts size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Reels
        </Link>
      </div>
    </div>
  );
};

export default Reels;
