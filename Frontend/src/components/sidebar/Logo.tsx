const Logo = () => {
  return (
    <div className="flex py-5 px-3 my-0 lg:my-3 lg:gap-4 lg:py-2 lg:pl-3 lg:rounded-md items-center cursor-pointer">
      <div className="block lg:hidden">
        <img src={"/instaicon.jfif"} className="w-9" />
      </div>
      <div className="im lg:block hidden">
        <img src={"/insta.png"} alt="Logo" className="w-32 h-8" />
      </div>
    </div>
  );
};

export default Logo;
