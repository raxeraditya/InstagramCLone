import Center from "./Center";
import Downbar from "./Downbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <div className="flex bg-black text-white w-full h-full sm:gap-[5rem] gap-5">
        <nav className="hidden sm:block sm:sticky sm:top-0 border-r border-gray-300 h-screen w-1/12 lg:w-1/4 xl:w-1/4">
          <LeftSidebar />
        </nav>
        <div className="downbar fixed bottom-0 sm:hidden">
          <Downbar />
        </div>
        <div className="containt mx-10 sm:mx-0 w-10/12 flex justify-between gap-[5rem]">
          <Center />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
