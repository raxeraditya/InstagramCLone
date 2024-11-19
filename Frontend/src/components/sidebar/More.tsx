import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const More = () => {
  return (
    <div className="flex lg:rounded-md items-center hover:bg-gray-700 cursor-pointer py-3 px-4">
      <div className="">
        <IoReorderThreeOutline size={25} className="pr-3 w-full" />
      </div>
      <Link to={"/"} className="font-semibold lg:pr-5 xl:pr-14 hidden lg:block">
        More
      </Link>
    </div>
  );
};

export default More;
