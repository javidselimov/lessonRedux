import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"


const Container = styled.div`
   background-color:teal;
   width:80%;
   margin:auto;
   color:white;
`


const Details = () => {

    const params = useParams()
   const [state,setState] = useState([])
    useEffect(()=>{
   axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
   .then(data=>setState(data.data))

     
    },[])

    console.log(params)

  return (
    <div>{state.id}<p>{state.title}</p>
    </div>
  )
}

export default Details