import Explore from "./sidebar/Explore";
import { Home } from "./sidebar/Home";
import Profile from "./sidebar/Profile";
import Reels from "./sidebar/Reels";
import Arrow from "./sidebar/Arrow";
import Create from "./sidebar/Create";
const Downbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between border-t border-red-200 bg-black w-screen h-12 z-30 text-white">
        <Home />
        <Explore />
        <Reels />
        <Create />
        <Arrow />
        <Profile />
      </div>
    </div>
  );
};

export default Downbar;
