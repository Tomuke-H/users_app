import React from "react";

const User = (props) => {

    return (
        <div>
            <h2>User page</h2>
            <h3>{props.user.name}</h3>
            <h4>{props.user.age}</h4>
            <a href="/">Home</a>
            <a href="/users/">Back to all Users</a>
            <a href={`/users/${props.user.id}/edit`}>Edit User</a>
        </div>
    );
};

export default User;