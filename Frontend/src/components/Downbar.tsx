import Explore from "./Sidebar/Explore";
import { Home } from "./Sidebar/Home";
import Profile from "./Sidebar/Profile";
import Reels from "./Sidebar/Reels";
import Arrow from "./Sidebar/Arrow";
import Create from "./Sidebar/Create";
const Downbar = ({ showText }: { showText: boolean }) => {
  return (
    <div>
      <div className="flex flex-row justify-between border-t border-red-200 bg-black w-screen h-12 z-30 text-white">
        <Home showText={showText} />
        <Explore showText={showText} />
        <Reels showText={showText} />
        <Create showText={showText} />
        <Arrow showText={showText} />
        <Profile showText={showText} />
      </div>
    </div>
  );
};

export default Downbar;
