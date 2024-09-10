import Explore from "./sidebar/Explore";
import { Home } from "./sidebar/Home";
import Logo from "./sidebar/Logo";
import Messages from "./sidebar/Messages";
import More from "./sidebar/More";
import Notifications from "./sidebar/Notifications";
import Profile from "./sidebar/Profile";
import Reels from "./sidebar/Reels";
import Search from "./sidebar/Search";

const LeftSidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full pt-2 pb-5 lg:px-4 lg:w-[80%]">
      <div>
        <Logo />
        <Home />
        <Search />
        <Explore />
        <Reels />
        <Messages />
        <Notifications />
        <Profile />
      </div>
      <div>
        <More />
      </div>
    </div>
  );
};

export default LeftSidebar;
