import React from "react";

function List (props){
    return (
        <React.Fragment>
            <li className="list-topic">{props.topic} {props.quantity}</li>
        </React.Fragment>
    );
}

export default List;