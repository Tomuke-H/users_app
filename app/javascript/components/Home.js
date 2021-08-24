import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>{`${props.info}`}</p>
    </div>
  );
};

export default Home;