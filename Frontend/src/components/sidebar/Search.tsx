import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div className="sub-section">
        <div className="search sidebar-logo">
          <IoSearchOutline size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Search
        </Link>
      </div>
    </div>
  );
};

export default Search;
