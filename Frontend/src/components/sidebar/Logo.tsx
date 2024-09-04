import { FaUserCheck } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <div className="pt-5 pb-4 logo">
        <div className="sublogo block sm:hidden">
          <FaUserCheck size={25} className="" />
        </div>
        <img
          src={"/insta.svg"}
          alt=""
          className="w-28 text-black h-12 image hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Logo;
