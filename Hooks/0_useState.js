//normal syntax
import {useState} from "react"

export function app(){
  const [count,setCount]=useState(0);
  return(
     <p>{count}</p>
    <button onClick={()=>{setCount(count+1);}}>Increase</button>
  )
}

//For array of object where per click we add a new object

export function app(){
   const [ele,setEle]=useState([])
   const addVal=()=>{
      setEle([...ele,{
        id: ele.length,
        val: Math.floor(Math.random()*10)+1;
      }])
   }
   return(
      <button onClick={addVal}>Add data</button>
     {ele.map((item)=>{
            <li key={item.id}>{item.val}<li>
      })}
   )
}

//Usestate with object
function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' })
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
			<h2>{JSON.stringify(name)}</h2>
		</form>
	)
}
