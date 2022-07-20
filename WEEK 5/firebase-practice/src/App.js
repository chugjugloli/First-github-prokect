import React from 'react'
import {auth} from "./firebase/init"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "firebase/auth";


function App() {
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      console.log(user)
      if (user){
        setUser(user)
      }
    })
  }, []);
  function register(){
    document.body.classList.remove("hidden")
    
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then(({user}) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function logout() {
    signOut(auth)
    setUser({})
  }
  return (
    <nav>
      <div>
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        
      </div>
      <div>
        {loading ? 'loading...' : user.email}
      </div>
      <br/>
      <p>Register here:</p>
      <form className='hidden'>
        <input defaultValue="email"/>
      </form>
    </nav>
  );
}

export default App;
