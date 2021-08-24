import React from "react";

const Home = (props) => {

    return (
        <div style={{ 
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ededed",
            border: "5px solid",
            borderColor: "#00e6f2", 
            alignItems: "center",
            width: "350px",
        }}>
            <h1>Home Page</h1>
            <a href="/users/">Show All Users</a>
            <a href="/users/new">Create New User</a>
            <a href="/birds/">Show all Birds</a>
            <a href="/birds/new">Create new Bird</a>
        </div>
    );
};

export default Home;