import React from "react";


const CharacterInfo = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.height}</p>
            <p>{props.homeworld}</p>
        </div>
    );
}

export default CharacterInfo;