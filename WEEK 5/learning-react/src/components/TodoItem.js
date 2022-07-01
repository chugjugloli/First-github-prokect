import React from "react"
import './style.css'

function TodoItem(props) {
    return (
        <div className="item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={(event) => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem