import React, { Fragment } from 'react'
import Header from '../component/Side-Nav/Header'
import RegisterForm from '../component/Register-Form/RegisterForm'
import { Row, Container } from 'reactstrap'

export const Home = () => {
  return (
    <Fragment>
      <Container style={{ display: 'flex', flexDirection: 'row' }}>
        <Header />
        <RegisterForm />
      </Container>
    </Fragment>
  )
}

export default Home
