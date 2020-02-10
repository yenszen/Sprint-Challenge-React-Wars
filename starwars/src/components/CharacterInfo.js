import React from "react";
import styled from "styled-components";
import "./StarWars.css";

const Card = styled.div`
    width: 25vw;
    background: rgba(0, 0, 0, 0.5);
    margin: 1rem 0;
    color: rgb(20, 245, 30);

    &:hover {
        background: rgb(0, 0, 0);
        outline-style: solid;
        outline-color: rgb(20, 245, 30);
        outline-width: thick;
    }
`;

const Header = styled.h2`
    background-color: lightgrey;
    color: black;
    margin-top: 0;
    font-size: 1.5rem;
`;

const Text = styled.p`
    font-size: 1rem;
`;

const CharacterInfo = (props) => {
    return (
        <Card className="card">
            <Header>{props.name}</Header>
            <Text>Height: {props.height}cm</Text>
            <Text>Hair color: {props.hair}</Text>
            <Text>Eye color: {props.eye}</Text>
            <Text>Birth year: {props.birthyear}</Text>
        </Card>
    );
}

export default CharacterInfo;