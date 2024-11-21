import LeftSidebar from "../LeftSidebar";
import Users from "./Users";
import ChatSection from "./ChatSection";

const ChatLayout = () => {
  return (
    <div className="flex w-full justify-center">
      <main className="hidden sm:block">
        <LeftSidebar showText={false} />
      </main>
      <div className="users w-full sm:w-[40%]">
        <Users />
      </div>
      <div className="message w-full h-screen hidden sm:block border-l">
        <ChatSection />
      </div>
    </div>
  );
};

export default ChatLayout;
