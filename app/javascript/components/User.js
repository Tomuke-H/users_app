import React from "react";

const User = (props) => {

    return (
        <div style={{ 
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ededed",
            border: "5px solid",
            borderColor: "#f2ad00", 
            alignItems: "center",
            width: "350px"
        }}>
            <h2>User page</h2>
            <h3>{props.user.name}</h3>
            <h4>Age: {props.user.age}</h4>
            <a href="/">Home</a>
            <a href="/users/">Back to all Users</a>
            <a href={`/users/${props.user.id}/edit`}>Edit User</a>
            <a href={`/users/${props.user.id}`} data-method="delete">Delete User</a>
        </div>
    );
};

export default User;