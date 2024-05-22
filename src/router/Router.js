import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*****************************************************************/
import NotFound from "components/common/NotFound";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
/*****************************************************************/
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* 설정 외 페이지 404처리 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
