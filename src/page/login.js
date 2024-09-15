import React, {Fragment} from 'react';
import { Container, Row } from "reactstrap";
import LantakaBg from './asset-page/Lantaka-bg.jpg'
import LoginForm from '../component/Login-Form/LoginForm';
import LoginText from '../component/Login-Text/LoginText';

export const Login = () => {
  
  return (
    <Fragment >
      <Container style={{display: 'flex', position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <img src={LantakaBg} alt="BackGround" className="login__body" style={{position: 'absolute', zIndex: '-1', width: '100%', height: '100%' }} />
        <div style={{position: 'absolute', width: '100%', height: '100%', background: '#fffffe50' }}></div>
        <Row>
          <LoginText style={{flex: '2'}}/>
          <LoginForm style={{flex: '1'}}/>
        </Row>
      </Container>
    </Fragment>
  );

};

export default Login;