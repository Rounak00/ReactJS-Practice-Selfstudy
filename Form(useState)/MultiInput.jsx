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

        setState({...state, [name] :value}) // akhane [name] it means dynamic data that mean in each change remove or writting of words it also remove and writing
         
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
                    name="userName"/>
               </div>
               <div>
                    <label htmlFor="phnNumber"> Phone Number</label>
                    <input type="number"
                    value={state.phnNumber}
                    onChange={handleInput}
                    autoComplete="off"
                    name="phnNumber"/>
               </div>
               <div>
                 <button type="submit">Submit</button>

               </div>
            </form>
       </>
    )
}

export default MultiInputs
