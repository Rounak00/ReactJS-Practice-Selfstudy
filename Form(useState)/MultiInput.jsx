import react from "react"
import {useState} from "react"

const MultiInputs=()=>{
    const [rec,setRec]=useState([])
    
     const [state,setState]=useState({
         userName : "",
         phnNumber:""
     });
 
     const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setState({...state, [name] :value})
     }

     const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord={...state, id:new Date().getTime().toString()}
        setRec([...rec, newRecord]);

        setState({userName:"",phnNumber:""})
     }
     
    return (
       <>
            <form action="" onSubmit={handleSubmit}>
               <div>
                    <label htmlFor="userName"> User Name</label>
                    <input type="text" 
                    value={state.userName}
                    onChange={handleInput}
                    name="userName" id="userName"/>
               </div>
               <div>
                    <label htmlFor="phnNumber"> Phone Number</label>
                    <input type="number"
                    value={state.phnNumber}
                    onChange={handleInput}
                    name="phnNumber" id="phnNumber"/>
               </div>
               <div>
                 <button type="submit">Submit</button>

               </div>
            </form>
       </>
    )
}

export default MultiInputs
