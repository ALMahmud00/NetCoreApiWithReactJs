import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const Home = () => {
  const appName = useSelector((state) => {
    return state?.localStorage?.appName;
  }, shallowEqual);
  return (
    <div className="home">
      <h2>{appName}</h2>
    </div>
  );
};

export default Home;
