import React , {useState} from "react";
// import { FaPlus , FaMinus , FaArrowsRotate  } from "react-icons/fa6";
import { FaPlus , FaMinus , FaSyncAlt  } from "react-icons/fa";
const Counter=()=>{
let [count , setCount]=useState(0);




    return(
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>
                <FaPlus className="icons" />
            </button>
            <button onClick={()=>setCount(count-1)}>
                <FaMinus className="icons" />
                </button>
            <button onClick={()=>setCount(0)}>
                <FaSyncAlt className="icons" />
                </button>

        </div>

    )
}

export default Counter