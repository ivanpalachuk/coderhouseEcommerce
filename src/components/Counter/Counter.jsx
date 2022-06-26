import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0)
    const[date,setDate] = useState (Date())
   
    const aumentar = () => {
        setCount(count+1)
        setDate(date)
    }
    return (  
        <>
        <div>{Date ()}</div>
        <button onClick={aumentar}>Aumentar</button>
        <p>{count}</p>
        </>
  ) 
}

export default Counter