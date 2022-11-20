import React,{ useReducer} from 'react'

function reducer(state,action){
  switch(action.type){
      case 'increament':
            return {count:state.count+1}
      case 'decreament':
            return {count:state.count-1} 
      default: 
             return {count: state.count}           
  }
}

function App() {
	  const [state,dispatch] = useReducer(reducer, {count:0})
	  

      function increament(){ dispatch({type:"increament"})}
      function decreament(){ dispatch({type:"decreament"})}

      return (
          <>
            <button onClick={decreament}> - </button>
            <span style={{margin: "10px"}}>{state.count}</span>
            <button onClick={increament}> + </button>
          </>
	  )
}

export default App
