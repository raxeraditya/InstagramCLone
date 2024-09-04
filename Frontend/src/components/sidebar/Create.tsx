import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <div className="sub-section" id="hidden1">
        <div className="create sidebar-logo">
          <IoMdAdd size={25} />
        </div>
        <Link to={"/"} className="sidebar-link">
          Create
        </Link>
      </div>
    </div>
  );
};

export default Create;
