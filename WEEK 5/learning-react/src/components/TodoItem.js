import React from "react"
import './style.css'

function TodoItem(props) {
    return (
        <div className="item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed")}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem