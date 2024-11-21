import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatLayout from "./components/Chat/ChatLayout";
import ChatMobile from "./components/Chat/ChatMobile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },

    {
      path: "/direct/inbox",
      element: <ChatLayout />,
    },
    {
      path: "/direct/inbox/t/:id",
      element: <ChatMobile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
