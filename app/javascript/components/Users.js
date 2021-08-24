import React from "react";

const Users = (props) => {
    const renderUsers = () => {
        return props.users.map((user) => {
            return (

                <div>
                    <h1>{user.name}</h1>
                    <h6>{user.age}</h6>
                    <a href={`/users/${user.id}`}>View User</a>
                    <a href={`/users/${user.id}/edit`}>Edit User</a>
                </div>

            );
        });
    };

    return (
        <div>
            <h2>All Users page</h2>
            <a href="/">Home</a>
            {renderUsers()}
        </div>
    );
};

export default Users;