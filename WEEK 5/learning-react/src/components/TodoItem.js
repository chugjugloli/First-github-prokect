import React from "react"
import './style.css'

function TodoItem(props) {
    const style = {
        textDecoration: "linethrough"
    }

    return (
        <div className="item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={(event) => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? style : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem