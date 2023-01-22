//runs synchronously after a render but before  the screen is update

// useEffect runs asynchronously and after a render is painted to the screen

//About syntax same as useEffect

import React,{useState,useLayoutEffect} from 'react'

const useLayoutEffect = () => {
    const [num,setNum]=useState(0);


     useLayoutEffect(()=>{
        if(num===0) setNum(num+Math.random()*10);
    },[num]
     )


    {/*
       useEffect(()=>{
        if(num===0) setNum(num+Math.random()*10);
       },[num]);
  
    */}


    // so difference here is in useEffect we  will see a 0 first and then see its change...
    
    //but in useLayoutEffect it will directly show you the number
  return (
    <div>
      <p>my new random number {num}</p>
      <button onClick={()=>setNum(0)}>Press Me</button>
    </div>
  )
}

export default useLayoutEffect
