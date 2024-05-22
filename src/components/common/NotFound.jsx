import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  //메인페이지로 이동
  const goMain = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>죄송합니다, 찾으시는 페이지가 존재하지 않습니다.</p>
      <div onClick={goMain}>메인페이지로 돌아가기</div>
    </div>
  );
};

export default NotFound;
