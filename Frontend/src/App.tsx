import { ChatPage } from "./components/ChatPage";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
