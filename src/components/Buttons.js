import React from "react";

function Buttons(props) {
    return (
        <button type="button" className=" btn btn-primary" onClick={props.click} id={props.btnId}>Button {props.btnId}</button>
        
    )
}

export default Buttons;