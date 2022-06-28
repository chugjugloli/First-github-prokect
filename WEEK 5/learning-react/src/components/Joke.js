import React from "react"

function Joke(prop) {
    return (
        <div>
            <h2>Question: {prop.question}</h2>
            <h3>Joke: {prop.punchline}</h3>
            <hr></hr>
        </div>
    )
}

export default Joke