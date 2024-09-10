import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex py-5 px-3 my-0 lg:my-3 lg:gap-4 lg:py-2 lg:pl-3 lg:rounded-md items-center hover:bg-gray-700 cursor-pointer">
      <div className="md:pl-2 lg:pl-0">
        <FaUserCheck size={25} className="" />
      </div>
      <Link to={"/"} className="font-semibold lg:pr-5 xl:pr-14 hidden lg:block">
        Profile
      </Link>
    </div>
  );
};

export default Profile;
