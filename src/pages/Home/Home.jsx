import React from "react";
import useNavi from "hooks/useNavigation";

const Home = () => {
  const navigate = useNavi();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>Home</div>
      <div onClick={() => handleLogin()}>로그인</div>
    </div>
  );
};

export default Home;
