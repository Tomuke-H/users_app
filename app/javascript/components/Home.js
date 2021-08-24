import React from "react";

const Home = (props) => {

    return (
        <div>
            <h1>Home Page</h1>
            <a href="/users/">Show All Users</a>
            <a href="/users/new">Create new User</a>
        </div>
    );
};

export default Home;