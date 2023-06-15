import React, {useState} from "react";


const States=()=>{
let [count, setCount]= useState({Gold:0, Silver:0, Bronz:0});

// function incrementGold(){
//     // setCount({Gold:count.Gold+1, Silver:0, Bronz:0});
//     setCount({...count, Gold: count.Gold+1})
// }






    return(
             <div>
            <h1>Gold:{count.Gold} Silver:{count.Silver} Bronz:{count.Bronz}</h1>
            <button onClick={()=>setCount({...count, Gold:count.Gold+1})} >Gold</button>

            <button onClick={()=>setCount({...count, Silver: count.Silver+1})}>Silver</button>

            <button onClick={()=>setCount({...count, Bronz: count.Bronz+1})}>Bronz</button>
            </div>
    )
}

export default States;