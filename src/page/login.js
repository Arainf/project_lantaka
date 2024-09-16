import React, {Fragment} from 'react';
import { Container} from "reactstrap";
import LoginForm from '../component/Login-Form/LoginForm';
import LoginText from '../component/Login-Text/LoginText';

export const Login = () => {
  
  return (
    <Fragment >
      <Container style={{display: 'flex', flexDirection: 'row',position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#3da9fc'}}>
        <LoginText />
        <LoginForm />
      </Container>
    </Fragment>
  );

};

export default Login;