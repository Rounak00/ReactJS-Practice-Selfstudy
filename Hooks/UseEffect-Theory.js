const app=()=>
{
const [count, setCont]=useState(0);
const [count2,setCount2]=useState(0);
  
  {/*
    React Life cycle:-
    
    1. DidMount -> Born
    2. DidUpdate -> Update
    3. WillUnmount -> Death
  */}  
  useEffect(()=>{}) //Simple type problem is if we use usestate in that case it will again run for rendering
  
  useEffect(()=>{
   console.log("work as did mount")
  },[]) // run only this app component run
  
  useEffect(()=>{
    console.log("Work as didmount and didupdate")
  },[count,count2]) // run opnce when component born and then every time when button pushed
  
  useEffect(()=>{
     console.log("work as did mount")
   return ()=>{
    console.log("IT is a willunmount")
   }
  },[]) //  if we put count in array so every time it will unmount first, then it will update 
        // if dont give any value a simple empty array then it will not update
}
