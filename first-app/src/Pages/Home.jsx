import React from 'react'
import { useEffect, useState } from 'react'

const Home = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((Res) => Res.json())
      .then((data) => setContent(data))
  }, []
  )
  console.log(content);

  return (<div>
    <h2>Home Page</h2>
    {content.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.images[0]} alt="product" width="120px" />
          <p>{item.price}</p>
        </div>
      )
    })

    }
  </div>)
}

export default Home
