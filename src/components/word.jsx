import React from "react";

function Word (props){
    return (
        <div className="word-card">
            <h2 className="word-name">{props.name}</h2>
            <p className="word-meaning">{props.meaning}</p>
            <p className="word-transcription">{props.transcription}</p>
            <p className="word-translation">{props.translation}</p>
            <p className="word-topic">{props.topic}</p>
        </div>
    );
}

export default Word;