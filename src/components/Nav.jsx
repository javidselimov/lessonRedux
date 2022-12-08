import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
   background-color:teal;
   width:80%;
   margin:auto;
   color:white;
`


const Nav = () => {
  const sebet = useSelector((state)=>state.cart)
  return (
    <Container>
     <Link to ="/">Home</Link>
     <Link to="/portfolio">Portfolio</Link>
      <span style={{marginLeft:"10px"}}>{sebet}</span>
     
     
    </Container>
  )
}

export default Nav