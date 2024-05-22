import React from "react";
import useNavi from "hooks/useNavigation";

const Home = () => {
  const navigate = useNavi();

  const loginHandle = () => {
    navigate("/login");
  };

  return (
    <div>
      <div>Home</div>
      <div onClick={() => loginHandle()}>로그인</div>
    </div>
  );
};

export default Home;
