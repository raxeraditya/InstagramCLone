const Logo = ({ showText }: { showText: boolean }) => {
  return showText ? (
    <div className="flex">
      <div className="block lg:hidden">
        <img src="/instaicon.jfif" className="w-9" alt="Small Icon" />
      </div>
      <div className={`${showText ? "lg:block hidden" : "hidden"}`}>
        <img src="/insta.png" alt="Logo" className="w-32 h-8" />
      </div>
    </div>
  ) : (
    <main className="w-12 h-12">
      <img src="/instaicon.jfif" alt="Icon" />
    </main>
  );
};

export default Logo;

const ChatLogo = () => {
  return (
    <main>
      <img src={"/instaicon.jfif"} alt="Icon" />
    </main>
  );
};

export { Logo, ChatLogo };
