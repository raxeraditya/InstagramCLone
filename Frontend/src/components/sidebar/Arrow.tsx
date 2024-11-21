import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

const Arrow = ({ showText }: { showText: boolean }) => {
  return (
    <div className="flex py-5 px-3 my-0 lg:my-3 lg:gap-4 lg:py-2 lg:pl-3 lg:rounded-md items-center hover:bg-gray-700 cursor-pointer">
      <div>
        <Link to={"chatmobileusers"}>
          {" "}
          <TiLocationArrow size={25} className="" />
        </Link>
      </div>
      <Link
        to={"/"}
        className={`${
          showText ? "font-semibold lg:pr-5 xl:pr-14 hidden lg:block" : "hidden"
        }`}
      >
        Home
      </Link>
    </div>
  );
};

export default Arrow;
