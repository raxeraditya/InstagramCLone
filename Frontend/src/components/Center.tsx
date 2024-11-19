import PostUi from "./Post/PostUi";

const Center = () => {
  return (
    <div className="flex items-center w-full">
      <div className="setarea flex items-center flex-col w-full">
        <h2 className="font-bold text-lg mb-4 w-full text-center">Main Feed</h2>
        <div className="flex flex-col items-center justify-between gap-3">
          <PostUi />
          <PostUi />
          <PostUi />
          <PostUi />
          <PostUi />
        </div>
      </div>
    </div>
  );
};

export default Center;
