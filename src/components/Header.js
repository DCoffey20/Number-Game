import React from "react";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Number Game!</h1>
            <p className="lead">Wins: {props.wins} Losses: {props.losses}</p>
        </div>
    )
}

export default Header;