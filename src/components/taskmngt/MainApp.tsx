import React, { useEffect } from "react";

//PLUGINS
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MainApp: React.FC = () => {
  //plugins
  const navigate = useNavigate();

  //retux store
  const { isLoggedin } = useSelector((state: any) => state.accountstore);

  //eff
  useEffect(() => {
    if (!isLoggedin) navigate("/");
  }, [isLoggedin]);

  return (
    <div>
      <p>MainApp</p>
    </div>
  );
};

export default MainApp;
