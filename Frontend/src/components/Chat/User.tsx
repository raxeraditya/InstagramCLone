import { Link } from "react-router-dom";

const User = ({ route }: { route: string }) => {
  return (
    <div className="w-full">
      <div className="user flex px-52 items-center justify-start cursor-pointer border border-gray-700 rounded-lg w-full pl-7 py-4 gap-3">
        <div className="avatar hidden lg:block">
          <Link to={`${route}`}>
            {" "}
            <img
              src="/aditya.jpg"
              alt="Avatar"
              className="w-14 h-14 rounded-full"
            />
          </Link>
        </div>
        <div className="name">
          <Link to={`${route}`}>
            <h1 className="text-2xl">Aditya</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
