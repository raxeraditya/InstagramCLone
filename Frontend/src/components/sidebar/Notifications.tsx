import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notifications = ({ showText }: { showText: boolean }) => {
  return (
    <div className="flex py-5 px-3 my-0 lg:my-3 lg:gap-4 lg:py-2 lg:pl-3 lg:rounded-md items-center hover:bg-gray-700 cursor-pointer">
      <div>
        <FaRegHeart size={25} className="" />
      </div>
      <Link
        to={"/"}
        className={`${
          showText ? "font-semibold lg:pr-5 xl:pr-14 hidden lg:block" : "hidden"
        }`}
      >
        Notification
      </Link>
    </div>
  );
};

export default Notifications;
