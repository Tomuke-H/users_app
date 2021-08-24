import React from "react";

const UserEdit = (props) => {

    return (
        <div>
            <h2>Edit page</h2>
            <a href="/">Home</a>
            <a href="/users/">Back to all Users</a>
            <form action={`users/${props.users.id}`} method="post">
                <input type="hidden" name="_method" value="patch"/>
                <h4>User Name</h4>
                <input defaultValue={props.user.name} name="user[name]" />
                <h4>User Age</h4>
                <input defaultValue={props.user.age} name="user[age]" />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserEdit;