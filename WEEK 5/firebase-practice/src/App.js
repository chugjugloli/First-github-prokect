import React from 'react'
import {auth, db} from "./firebase/init"
import {addDoc, collection, ddDoc} from "firebase/firestore"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "firebase/auth";


function App() {
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  function createPost(){
    const post = {
      title: "Land a $100k job",
      description: "Finish Frontend Simplified",
    };
    addDoc(collection(db, "posts"), post)
  }
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
    <div>
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default App;
