import React from "react"

function FormComponent(props){
    return (
        <main>
            <h1> Welcome to Caden Airlines!</h1>
            <br/>
            <h3>Please input your information below!</h3>
            <form>
                <input placeholder="First name" name="firstName" value={props.firstName} onChange={props.handleChange} type="text"/>
                <br/>
                <input placeholder="Last name" name="lastName" value={props.lastName} onChange={props.handleChange} type="text"/>
                <br/>
                <input placeholder="Age" name="age" value={props.age} onChange={props.handleChange} type="text"/>

                <br/>
                Gender:
                <br/>
                <label>
                    <input type="radio" name="gender" value="male"
                    checked={props.gender === "male"}
                    onChange={props.handleChange}/> Male
                </label>
                <br/>
                <label>
                    <input 
                    type="radio" name="gender" value="female"
                    checked={props.gender === "female"}
                    onChange={props.handleChange}/> Female
                </label>
                <br/>
                <label>
                    <input placeholder="other not listed" name="gender" value={props.gender} onChange={props.handleChange} type="text"/> 
                </label>

                <br/>
                Location:
                <select value={props.location} name="location" onChange={props.handleChange}>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                <br/>
                Diet:
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.diet.push(" Vegan")}
                    /> Vegan?
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.diet.push(" Kosher")}
                    /> Kosher?
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.diet.push(" Lactose-free")}
                    /> Lactose-free?
                </label>

                <h2>Please review the information you input: </h2>
                <h4>Name: {props.firstName} {props.lastName}</h4>
                <h4>Age: {props.age}</h4>
                <h4>Gender: {props.gender}</h4>
                <h4>Location: {props.location}</h4>
                <h4>Diet: {props.diet}</h4>

                <br/>

                

                <h4>If the above information is correct, please submit using the button below: </h4>

                <button>Submit</button>
            </form>
        </main>
    )
}

export default FormComponent