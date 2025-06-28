import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setRole("guest");
    navigate("/", { replace: true });
  }, [setRole, navigate]);

  return null;
};

export default Logout;
