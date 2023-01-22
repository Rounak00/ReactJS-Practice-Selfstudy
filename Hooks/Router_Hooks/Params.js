import {useParams} from "react-router-dom";
 
/* With out hook
export function test({match}){
  return (
    <p>Hello {match.params.name}</p>
  );
}
*/

 eport function test(){
   const par=useParams(); //path should be /:name; // it return a object
   return (
    <p>Hello {par.name}</p>
  );
 }
 
 
  eport function test(){
   const par=useParams(); //path should be /:fname/:lname; // it return a object
   return (
    <p>Hello {par.fname} {par.lname}</p>
  );
 }
