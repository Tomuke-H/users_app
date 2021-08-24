import React from "react";

const UserNew = (props) => {

    return (
        <div>
            <h2>New User</h2>
            <a href="/">Home</a>
            <a href="/users">Back to all Users</a>
            <form action="/users" method="post">
                <h4>User Name</h4>
                <input name="user[name]" />
                <h4>User Age</h4>
                <input name="user[age]" />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserNew;