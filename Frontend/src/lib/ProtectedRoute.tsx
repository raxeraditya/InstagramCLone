import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: React.JSX.Element }) => {
  const user = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return <>{children}</>;
};

export default ProtectedRoutes;
