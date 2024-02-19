import React from "react";
import List from "./list";

function Content (){
    return (
        <React.Fragment>
            <h1 className="content-title">Vocabulary in cards</h1>
            <h2 className="content-topics">Topics</h2>
            <ul className="content-list">
                <List></List>
            </ul>
        </React.Fragment>
    );
}

export default Content;