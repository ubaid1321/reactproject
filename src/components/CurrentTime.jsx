import { useEffect } from "react";
import { useState } from "react";

let CurrentTime=() => {
   const [time,setTime]= useState(new Date())
    useEffect(()=>{
    const intervalid=setInterval(()=>{
      setTime(new  Date());
    },1000)
    return ()=>{
        clearInterval(intervalid)
    }
    },[])
    


    return(
        <p className="lead">This is the current time:{time.toLocaleDateString()} {time.toLocaleTimeString()}</p>
    )
}
export default CurrentTime;