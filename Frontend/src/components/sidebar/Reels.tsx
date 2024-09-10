import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const Reels = () => {
  return (
    <div className="flex py-5 px-3 my-0 lg:my-3 lg:gap-4 lg:py-2 lg:pl-3 lg:rounded-md items-center hover:bg-gray-700 cursor-pointer">
      <div className="">
        <SiYoutubeshorts size={25} className="" />
      </div>
      <Link to={"/"} className="font-semibold lg:pr-5 xl:pr-14 hidden lg:block">
        Reels
      </Link>
    </div>
  );
};

export default Reels;
