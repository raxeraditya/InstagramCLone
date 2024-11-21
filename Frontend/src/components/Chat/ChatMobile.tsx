import LeftSidebar from "../LeftSidebar";
import Users from "./Users";
import ChatSection from "./ChatSection";

const ChatMobile = () => {
  return (
    <div>
      <div className="flex w-full">
        <main className="hidden sm:block">
          <LeftSidebar showText={false} />
        </main>
        <div className="users w-[100%] sm:w-[40%] hidden sm:block">
          <Users />
        </div>
        <div className="message w-full h-screen border-l">
          <ChatSection />
        </div>
      </div>
    </div>
  );
};

export default ChatMobile;
