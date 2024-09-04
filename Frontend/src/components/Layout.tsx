import Center from "./Center";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <div className="flex bg-black text-white w-full h-full gap-[5rem]">
        <nav className="sticky top-0 border-r border-gray-300 h-screen w-1/12 md:w-3/12 lg:w-1/4">
          <LeftSidebar />
        </nav>
        <div className="containt w-4/5 md:w-full flex justify-between gap-[5rem]">
          <Center />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
