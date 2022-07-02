/*import React from "react"
import Footer from "./Footer1"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        
    )
}

export default App
*/

/*
import React from "react"

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'


function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App

*/

/*
import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
import './style.css'


function check() {
     
}
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        console.log("changed", id)
        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div className="list">
                {todoItems}
            </div>
        )
    }
    
}

export default App

*/

/*
import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div>
            <ContactCard
                name="Cat1"
                phone="864"
                email="cat1@cat"
            />
            <ContactCard 
                name="Cat2"
                phone="4123"
                email="cat2@cat"
            />
            <ContactCard 
                name="Cat3"
                phone="213"
                email="cat3@cat"
            />
            <ContactCard 
                name="Cat4"
                phone="3421"
                email="cat4@cat"
            />
            
        </div>
    )
}

export default App

*/

/*
import React from "react"
import Joke from "./Joke"

function App() {
    return (
        <div>
            <Joke
                question = "joke1"
                punchline = "punchline1"
            />
            <Joke
                question = "joke2"
                punchline = "punchline2"
            />
            <Joke
                question = "joke3"
                punchline = "punchline3"
            />
            <Joke
                question = "joke4"
                punchline = "punchline4"
            />
            <Joke
                question = "joke5"
                punchline = "punchline5"
            />
        </div>
    )
}

export default App

*/

/*

import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
   
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App

*/

/* 
import React from "react"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Code goes here</h1>
            </div>
        )
    }
}

export default App


*/

/*
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App

*/

/*
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "Dog",
            age: 16
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App

*/

/*
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
            logText: ""
        }
    }
    
    boolTest() {
        {if(this.state.isLoggedIn == true){
            this.state.logText = "in"
        } else {
            this.state.logText = "out"
        }}
    }

    render() {
        this.boolTest()
        console.log(this.state.logText)
        return (
            <div>
                <h1>You are currently logged {this.state.logText} </h1>
            </div>
        )
    }
}

export default App

*/

/*
import { render } from "@testing-library/react"
import React from "react"

function handleClick() {
    console.log("I was clicked")
}
class App extends React.Component {
    render() {
        return(
            <div>
                <img src="https://www.fillmurray.com/200/100"/>
                <br/>
                <br/>
                <button onClick={handleClick}>Click me</button>
            </div>
        )
    }
}

export default App

*/

/*

import React from "react"

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this)
    }

    increase() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increase}>Change!</button>
            </div>
        )
    }
}

export default App

*/

/*
import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    componentDidMount(){
        // Get the data I need
    }

    shouldComponentUpdate(nextProps, nextState){
        //erturn if want to update
        //return false if not 
    }

    componentWillUnmount(){
        //teardown or cleanup your code
        // remove event listener (run code while someone scrolls)
    }

    render(){
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App

*/

/*
import React, {Component} from "react"
import Conditional from "./Conditional"
class App extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ?

                <h1>Loading...</h1> :

                <Conditional />}
            </div>
        )
    }
}

export default App
*/

import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers"
import React from "react"
import LogBtn from "./LogBtn"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.isLoggedIn = this.isLoggedIn.bind(this)
    }

    render(){
        return (
            <div>
                <h1>Hello User, you are currently {this.state.updatedLog}</h1>
                
            </div>
        )
    }
}

export default App