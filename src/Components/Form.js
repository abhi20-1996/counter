import React,{useState} from "react";



const Form=()=>{
let [name, setNmae]=useState("");
function enterdText(event){
    setNmae(event.target.value);
}





    return(
        <div className="form">
        <input type="text" placeholder="Enter Your Name"
        onChange={enterdText}
        />
        <p>Name is: {name}</p>
        </div>
    )
}

export default Form;