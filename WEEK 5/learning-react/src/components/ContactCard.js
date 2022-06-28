import React from "react"

function ContactCard(props) {
    return(
        <div>
            <img ahref={props.imgUrl}></img>
            <h3>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard

