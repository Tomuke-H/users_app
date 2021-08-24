import React from "react";

const BirdNew = (props) => {

    return (
        <div style={{ display: "flex",
        flexDirection: "column",
        backgroundColor: "#ededed",
        border: "5px solid",
        borderColor: "#00e6f2", 
        alignItems: "center",
        width: "350px"}}>
            <h2>New Bird</h2>
            <a href="/">Home</a>
            <a href="/birds">Back to all Birds</a>
            <form action="/birds" method="post">
                <h4>Bird Name</h4>
                <input name="bird[name]" />
                <h4>Bird Adjective</h4>
                <input name="bird[adj]" />
                <button type="submit">Add Bird</button>
            </form>
        </div>
    );
};

export default BirdNew;