import React from "react";
// import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <div className="fof">
        <h1>ERROR 404</h1>
        <h1 className="animate">페이지를 찾을수 없습니다.</h1>
      </div>
      <div>{/* <button type="button">" onClick={navigateHome} /> */}</div>
    </div>
  );
};

export default NotFound;
