import React from "react";

const BirdEdit = (props) => {
    const { id, name, adj } = props.bird

    return (
        <div style={{ display: "flex",
        flexDirection: "column",
        backgroundColor: "#ededed",
        border: "5px solid",
        borderColor: "#00e6f2", 
        alignItems: "center",
        width: "350px"}}>
            <h2>Edit page</h2>
            <a href="/">Home</a>
            <a href="/birds/">Back to all Birds</a>
            <a href={`/birds/${props.bird.id}`} data-method="delete">Delete Bird</a>
            <form action={`/birds/${props.bird.id}`} method="post">
                <input type="hidden" name="_method" value="patch"/>
                <h4>Bird Name</h4>
                <input defaultValue={name} name="bird[name]" />
                <h4>Bird Adj</h4>
                <input defaultValue={adj} name="bird[adj]" />
                <button type="submit">Update Bird</button>
            </form>
        </div>
    );
};

export default BirdEdit;