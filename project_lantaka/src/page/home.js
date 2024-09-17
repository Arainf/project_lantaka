import React, { Fragment } from 'react'
import Header from '../component/Side-Nav/Header'
import RegisterForm from '../component/Register-Form/RegisterForm'
import Tittle from '../component/Tittle/Tittle'
import { Row, Container, Col } from 'reactstrap'

export const Home = () => {
  return (
    <Fragment>
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <Header />
        <Col>
          <Tittle />
          <RegisterForm />
        </Col>

      </Container>
    </Fragment>
  )
}

export default Home
