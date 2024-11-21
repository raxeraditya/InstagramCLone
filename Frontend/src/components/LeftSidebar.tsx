import Explore from "./Sidebar/Explore";
import { Home } from "./Sidebar/Home";
import { Logo } from "./Sidebar/Logo";
import Messages from "./Sidebar/Messages";
import More from "./Sidebar/More";
import Notifications from "./Sidebar/Notifications";
import Profile from "./Sidebar/Profile";
import Reels from "./Sidebar/Reels";
import Search from "./Sidebar/Search";

const LeftSidebar = ({ showText }: { showText: boolean }) => {
  return (
    <div className="flex flex-col h-screen items-center justify-between py-5 border-r">
      <div>
        <Logo showText={showText} />
        <Home showText={showText} />
        <Search showText={showText} />
        <Explore showText={showText} />
        <Reels showText={showText} />
        <Messages showText={showText} />
        <Notifications showText={showText} />
        <Profile showText={showText} />
      </div>
      <div className="">
        <More showText={showText} />
      </div>
    </div>
  );
};

export default LeftSidebar;
