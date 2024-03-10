import PropTypes from "prop-types"


export default function Cid({name}){
    return (
        <>
          <p className="bg-amber-700 ">Hello this is ,{name}</p>
          {console.log(typeof(name))}
        </>
    )
}

Cid.PropTypes={
  name:PropTypes.string
}

