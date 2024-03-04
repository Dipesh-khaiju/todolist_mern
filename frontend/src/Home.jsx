import {useState,useEffect} from "react";
import Create from "./create.jsx"
import axios from "axios";
import {BsCircleFill,BsFillTrashFill,BsFillCheckCircleFill} from "./displayicons.jsx";

function Home(){
   
    const [todos,setTodos]=  useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/get")
        .then(result=> setTodos(result.data))
        .catch(err=>console.log(err))
    },[]);
    const handleEdit=(id)=>{
        axios.put('http://localhost:3000/update/'+id)
        .then(()=>{location.reload()})
        .catch(err=>console.log(err))
    }
    const handleDelete=(id)=>{
        axios.delete('http://localhost:3000/delete/'+id)
        .then(()=>{location.reload()})
        .catch(err=>console.log(err))
    }
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
                <div className="task" key=""  >
                     <div className="checkbox" onClick={()=> handleEdit(todo._id)}>
                     { todo.done ? <BsFillCheckCircleFill />
                     : 
                     <BsCircleFill className="icon1" />
                     }
                      <p className={todo.done ? "line_through" : ""}>{todo.task}</p> 
                     </div>

                     <div onClick={()=>handleDelete(todo._id)}>
                       <span><BsFillTrashFill className="icon" /></span>
                     </div>
          
                </div>
        ))
         }
        </div>
    )
}
export default Home;    
