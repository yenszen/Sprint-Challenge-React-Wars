import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 25vw;
    border: 1px solid white;
    background: rgba(35, 35, 35, 0.25);

    &:hover {
        background: rgba(50, 50, 50, 0.75);
    }
`;

const CharacterInfo = (props) => {
    return (
        <Card>
            <h2>{props.name}</h2>
            <p>Height: {props.height}cm</p>
            <p>Hair color: {props.hair}</p>
            <p>Eye color: {props.eye}</p>
        </Card>
    );
}

export default CharacterInfo;