import {useHistory} from "react-router-dom"

export function app(){
   const history =useHistory(); // return object of manythings like push, goBack, goFront, go etc
  return(
   <button onClick={history.goBack}>Go back</button>
)}

//history.push("path") -> we can redirect to any page 
