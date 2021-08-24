import React from "react";

const Birds = (props) => {
    const renderBirds = () => {
        return props.birds.map((bird) => {
            return (

                <div style={{ display: "flex",
                flexDirection: "column",
                backgroundColor: "#ededed",
                border: "5px solid",
                borderColor: "#00e6f2", 
                alignItems: "center",
                width: "350px"
            }}>
                    <h1>{bird.name}</h1>
                    <h3>Adjective: {bird.adj}</h3>
                    <a href={`/birds/${bird.id}`}>View Bird</a>
                    <a href={`/birds/${bird.id}/edit`}>Edit Bird</a>
                    <a href={`/birds/${bird.id}`} data-method="delete">Delete Bird</a>
                </div>

            );
        });
    };

    return (
        <div style={{ display: "flex",
        flexDirection: "column",
        backgroundColor: "#ededed",
        border: "5px solid",
        borderColor: "#00e6f2", 
        alignItems: "center",
        justifyContent: "center",
        width: "350px"}}>
            <h2>All Birds page</h2>
            <a href="/">Home</a>
            <a href="/birds/new">Create new Bird</a>
            {renderBirds()}
        </div>
    );
};

export default Birds;