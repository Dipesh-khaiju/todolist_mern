import {useState} from "react";     
import axios from "axios";
function Create(){
    const [task,setTask]=useState([]);
    const handleClick =()=>{
        axios.post("http://localhost:3000/add",{task:task})
        .then(() => {location.reload()})
        .catch(err =>console.log(err))
    }
    return(
        <div className="create_form">
            <input type="text" name="" id="" placeholder="ADD TASK" onChange={(a)=> setTask(a.target.value)} />
            <button type="button" onClick={handleClick}>ADD</button>
        </div>
    )
}
export default Create;