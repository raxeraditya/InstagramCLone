import { FaUserCheck } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <div className="">
        <div className="sublogo block lg:hidden">
          <FaUserCheck size={25} className="" />
        </div>
        <img
          src={"/insta.svg"}
          alt=""
          className="w-28 text-black h-12 image hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Logo;
