import useTitleCount from "./useTitleCount"

export function app(){
  const [count, setCount]=useState();
  
  /* useEffect(()=>{ // now if we need this use effect in many pages so we can do it with custom hook
         if(count>=1)document.title=`chats (${count})`;
         else document.title=`chat`;
     },[count]) */
     
   useTitleCount(count);  
}
