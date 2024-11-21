import User from "./User";

const Users = () => {
  const mockUsers = new Array(20).fill(null);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-2 py-2 px-4 overflow-y-auto scrollbar-hide h-screen sm:w-full">
        {mockUsers.map((_, index) => (
          <User key={index} route="/direct/inbox/t/34" />
        ))}
      </div>
    </div>
  );
};

export default Users;
