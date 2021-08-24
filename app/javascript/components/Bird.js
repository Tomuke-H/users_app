import React from "react";

const Bird = (props) => {

    return (
        <div style={{ 
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ededed",
            border: "5px solid",
            borderColor: "#00e6f2", 
            alignItems: "center",
            width: "350px"
        }}>
            <h2>Bird page</h2>
            <h3>{props.bird.name}</h3>
            <h4>Adjective: {props.bird.adj}</h4>
            <a href="/">Home</a>
            <a href="/birds/">Back to all Birds</a>
            <a href={`/birds/${props.bird.id}/edit`}>Edit Bird</a>
            <a href={`/birds/${props.bird.id}`} data-method="delete">Delete Bird</a>
        </div>
    );
};

export default Bird;