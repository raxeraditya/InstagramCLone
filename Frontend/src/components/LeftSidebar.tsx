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
    <div className="flex flex-col h-screen items-center justify-between">
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
      <div className="mb-6 mr-5">
        <More />
      </div>
    </div>
  );
};

export default LeftSidebar;
