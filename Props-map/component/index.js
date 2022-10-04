import React from 'react'
import Data from './Data'
import Card from './Card'
ReactDom.render(
<> 
    {Data.map((item,index,Data)=>{
            <Card
            name={item.name}
            salary={item.salary}
            state={item.state}
            />
      })
    }
</>, 
document.getElementById("root"));
