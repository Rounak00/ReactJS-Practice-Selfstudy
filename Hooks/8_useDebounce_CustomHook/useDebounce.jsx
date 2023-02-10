const [type,setType]=useState("");

function handleInput(e){
   const tar=e.target.value;
   clearTimeout(type);
  
   const timeout=setTimeout(()=>{
     Search(text);
   },1000);
  setType(timeout);
}

//Interm of component/Custo hook
const [type,setType]=useState("");
function handleInput(func,waiy=1000){
  
   clearTimeout(type);
  
   const timeout=setTimeout(()=>{
     func()
   },wait);
  setType(timeout);
}
