import React from "react";

const UserEdit = (props) => {
    const { id, name, age } = props.user

    return (
        <div style={{ display: "flex",
        flexDirection: "column",
        backgroundColor: "#ededed",
        border: "5px solid",
        borderColor: "#f2ad00", 
        alignItems: "center",
        width: "350px"}}>
            <h2>Edit page</h2>
            <a href="/">Home</a>
            <a href="/users/">Back to all Users</a>
            <a href={`/users/${props.user.id}`} data-method="delete">Delete User</a>
            <form action={`/users/${props.user.id}`} method="post">
                <input type="hidden" name="_method" value="patch"/>
                <h4>User Name</h4>
                <input defaultValue={name} name="user[name]" />
                <h4>User Age</h4>
                <input defaultValue={age} name="user[age]" />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UserEdit;