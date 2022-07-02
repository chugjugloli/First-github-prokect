import React from "react"

function LogBtn(props) {
    return (
        <div>
            <h1>
            Hello User, you are currently {props.item.userText}
            </h1>
            <button onClick={(event) => props.updateLog(props.item.id)}
            >
                {props.item.btnText}
            </button>
        </div>
    )
}

export default LogBtn