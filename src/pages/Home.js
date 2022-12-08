import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { getData } from '../state/actions/dataActions'
import {Link} from 'react-router-dom'
import { addToCart } from '../state/actions/sebetActions'

const Container = styled.div`
 
   width:80%;
   margin:auto;
   

   
`
const ContainerTwo = styled.div`
 
   width:100%;
   margin:auto;
   display:flex;
   flex-wrap:wrap;

   
`
const Comp = styled.div`
   width:30%;
   padding:3px;
   border:1px solid black
`

const Home = () => {

   const {data,error} = useSelector(state=>state.data)  
  const dispatch =  useDispatch()
    const handleClick=()=>{
         dispatch(getData())
    }
 console.log(data)
    return (
        <Container>Home
            <button onClick={handleClick}>Get data</button>
         <ContainerTwo>
             {error.length>0&&error}
         {data?.map((item)=>{
             return <Comp key={item.id}>
                 <p>{item.title}</p>
                 {/* <img style={{width:"100px"}} src={item.image} alt={item.image}></img> */}
                 {/* <a href={item.url}>etrafli</a> */}
                 <Link to={`/details/${item.id}`}>detallar</Link>
                 <button onClick={()=>{dispatch(addToCart())}}>sebete at</button>
             </Comp>
         })}
       
         </ContainerTwo>
         
       </Container>

    )
}

export default Home