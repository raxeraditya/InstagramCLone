import Center from "./Center";
import Downbar from "./Downbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Layout = () => {
  return (
    <div className="w-full h-full">
      <div className="downbar fixed bottom-0 sm:hidden">
        <Downbar />
      </div>
      <div className="flex justify-between bg-black text-white">
        <nav className="hidden w-[10%] sm:w-[8%] h-screen lg:w-[20%] sm:block sm:sticky sm:top-0 border-r">
          <LeftSidebar />
        </nav>
        <div className="flex w-[100%] sm:w-[92%] lg:w-[60%] justify-center">
          <Center />
        </div>
        <div className="hidden w-[10%] lg:w-[20%] h-screen sm:top-0 lg:block md:sticky border-l">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
