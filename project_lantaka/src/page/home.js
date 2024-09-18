import React, { Fragment, useState } from 'react';
import SideBar from '../component/Side-Nav/SideBar';
import RegisterForm from '../component/Register-Form/RegisterForm';
import Tittle from '../component/Tittle/Tittle';
import Header from '../component/Header/Header';
import { Col, Container } from 'reactstrap';

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <Fragment>
      <Container style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', position: 'relative', maxWidth: '100vw' }}>
        <SideBar isOpen={sidebarOpen} />
        <Col style={{ width: '100%' }}>
          <Header onSidebarToggle={toggleSidebar} />
          <Tittle />
          <RegisterForm />
        </Col>
      </Container>
    </Fragment>
  );
};

export default Home;
