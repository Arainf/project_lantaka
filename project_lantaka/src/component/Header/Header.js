import React from 'react'
import './header.css'
import { Container } from 'reactstrap'
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <Container>
      <div className="header_body">
        <div className='header_div1'>
          <div className='menu'>
            <GiHamburgerMenu />
          </div>
          <h1>ADZU LANTAKA</h1>
        </div>
        <div>
          <div className="profile">
            <h1>profile somthin</h1>
          </div>
        </div>
      </div>


    </Container >
  )
}

export default Header
