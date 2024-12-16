import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get("/api/jokes")
    .then((res)=>{
        setJokes(res.data);
    })

    .catch((e)=>{
      console.log(e);
    })
  })
  return (
    <>
     <h1>Mr Developer Duggal</h1>
     <p>I have {jokes.length} no of jokes huhahahha</p>
     {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
      {/* <p>{joke.id} Number 1:</p>  */}
      <br/>
      <p>Joke Title: {joke.title}</p> 
      <p>Joke : {joke.content}</p> 
      <br/>
        </div>
      ))
     }
    </>
  )
}

export default App
