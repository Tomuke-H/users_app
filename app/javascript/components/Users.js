import React from "react";

const Users = (props) => {
    const renderUsers = () => {
        return props.users.map((user) => {
            return (

                <div style={{ display: "flex",
                flexDirection: "column",
                backgroundColor: "#ededed",
                border: "5px solid",
                borderColor: "#f2ad00", 
                alignItems: "center",
                width: "350px"
            }}>
                    <h1>{user.name}</h1>
                    <h3>Age: {user.age}</h3>
                    <a href={`/users/${user.id}`}>View User</a>
                    <a href={`/users/${user.id}/edit`}>Edit User</a>
                    <a href={`/users/${user.id}`} data-method="delete">Delete User</a>
                </div>

            );
        });
    };

    return (
        <div style={{ display: "flex",
        flexDirection: "column",
        backgroundColor: "#ededed",
        border: "5px solid",
        borderColor: "#f2ad00", 
        alignItems: "center",
        justifyContent: "center",
        width: "350px"}}>
            <h2>All Users page</h2>
            <a href="/">Home</a>
            <a href="/users/new">Create new User</a>
            {renderUsers()}
        </div>
    );
};

export default Users;