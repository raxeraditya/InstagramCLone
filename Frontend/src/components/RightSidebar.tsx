const RightSidebar = () => {
  return (
    <div className="w-0 sm:w-[40%] hidden sm:block">
      <div className="bg-yellow-500 w-full">
        <h2 className="font-bold text-lg text-right">Right Sidebar</h2>
        <ul>
          <li className="mb-2">Suggestions</li>
          <li className="mb-2">Trending</li>
          <li className="mb-2">Activities</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
