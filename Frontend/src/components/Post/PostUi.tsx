const PostUi = () => {
  return (
    <div className="flex items-center justify-center border w-[80%] sm:w-[60%]">
      <div className="bg-white shadow-md rounded-md">
        <img src={"/aditya1.png"} alt="Post 2" className="object-contain" />
        <div className="p-4 text-black">
          <h3 className="font-semibold">City Lights</h3>
          <p>The city at night with all its glory.</p>
        </div>
      </div>
    </div>
  );
};

export default PostUi;
