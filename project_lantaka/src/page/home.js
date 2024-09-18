import React, { Fragment } from 'react'
import SideBar from '../component/Side-Nav/SideBar'
import RegisterForm from '../component/Register-Form/RegisterForm'
import Tittle from '../component/Tittle/Tittle'
import Header from '../component/Header/Header'
import { Row, Container, Col } from 'reactstrap'

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Col>
          <Tittle />
          <RegisterForm />
        </Col>

      </Container>
    </Fragment>
  )
}

export default Home
