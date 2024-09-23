import React, { Fragment } from 'react';
import SideBar from '../components/Side-Nav/SideBar';
import RegisterForm from '../components/Register-Form/RegisterForm';
import Title from '../components/Title/Title';
import Header from '../components/Header/Header';
import { Col, Container } from 'reactstrap';
import './asset-page/home.css';

export const Reservation = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <Fragment >
      <Container style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', position: 'relative', maxWidth: '100vw' }}>
        <SideBar isOpen={sidebarOpen} />
        <Col style={{ width: '100%' }}>
          <Header onSidebarToggle={toggleSidebar} />
          <div className='home_body'>
            <div className='home_title'>
              <Title location={'Dashboard'} breadcrumb={'home / dashboard'} />
            </div>
            <div className='home_div1'>
              <RegisterForm />
            </div>
          </div>
        </Col>
      </Container>
    </Fragment>
  );
};

export default Reservation;
