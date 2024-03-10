import axios from "axios";
import React, {useEffect,useState} from 'react';

export default function Ax(){
      const [userData,setUserData]=useState([]);
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        setUserData(response.data);
    }).catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
   }
    ,[]);

    return (
        <>
          {
            userData.map((data)=>{
                return (<div>{data.name}</div>)
            })
          }
        </>
    );
   
}



--------------------------------------------NORMAL REST API ------------------------------------------------------
const getAPIData=async()=>{
    const res=await axios.get("LINK");
    console.log(res);
}
