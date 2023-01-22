//Useref create some mutable variable which will not rerender component
//It Access dom element Directly



/*
import React from 'react';
import {useRef,useState, useEffect} from "react"

export function App(props) {
 const [mydata,setMydata]=useState("");
    const [count, setCount]=useState(0);
  
    useEffect(()=>{
       setCount(count+1);
     });
  
  return(
    <>
     <input
       type="text"
       value={mydata}
       onChange={(e)=>setMydata(e.target.value)}
     />
     
    <p style={{color:"white"}}>The Number of time it render : {count} </p>
   </>
  );
} 

*/
// the problem here is count first call useeffect that increase count and again rerender a new state so count get increasing
//we can use useffect didmount() but it will only increase once at first then

//Example one: Non rerendering

import React from "react";
import "./App.css";
import {useState, useEffect, useRef} from "react"

function App() {
   const [mydata,setMydata]=useState("");
    // const [count, setCount]=useState(0);
  const count=useRef(0); // use ref return a object
    useEffect(()=>{
    //    setCount(count+1);
    count.current=count.current+1;
     },);
  
  return(
    <>
     <input
       type="text"
       value={mydata}
       onChange={(e)=>setMydata(e.target.value)}
     />
     
    <p>The Number of time it render : {count.current} </p>
   </>
  );
}

export default App;



//Example 2 : Access dom element
import React from "react";
import "./App.css";
import {useState,  useRef} from "react"

function App() {
   const [mydata,setMydata]=useState("");
    
   const inputElem=useRef(""); 
   
   const changeStyle=()=>{
     inputElem.current.style.backgroundColor="red"; //useref return current object where currebt store our input field so we can add there more object element
   }
  
  return(
    <>
     <input
       ref={inputElem}
       type="text"
       value={mydata}
       onChange={(e)=>setMydata(e.target.value)}
     />
     
    <button onClick={changeStyle}>click </button>
   </>
  );
}

export default App;

