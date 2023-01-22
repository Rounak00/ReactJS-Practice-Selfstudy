import {useLocation, useParams} from "react-router-dom"

 export function test(){
   const par=useParams();
   const location=useLocation(); // return a object of hash,key, pathname, search etc;
   return (
    <p>Hello {par.fname} {par.lname}</p>
     <p>Our path : {location.pathname}</p>
  );
 }
