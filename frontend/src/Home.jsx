import {useState,useEffect} from "react";
import Create from "./create.jsx"
import axios from "axios"

function Home(){
    const [todos,setTodos]=  useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/get")
        .then(result=> setTodos(result.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div className = "home" >
            <h2> TODOList</h2>
            <Create />      
            <br />
         
        {
            todos.length === 0 
            ?
             <div><h2>No Records</h2></div>
             :
               todos.map(todo => (
                <div className="task" key="first">
                <p>{todo.task}</p> 
                </div>
        ))
         }
        </div>
    )
}
export default Home;    
