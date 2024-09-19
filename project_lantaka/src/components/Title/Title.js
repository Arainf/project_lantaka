import React from 'react';
import './title.css';
import { Container } from 'reactstrap';

export const Title = ({ location, breadcrumb }) => {
  return (
    <Container>
      <div className='title_body'>
        <h1>{location}</h1>
      </div>
      <div className='title_subbody'>
        <h5>{breadcrumb}</h5>
      </div>
    </Container>
  )
}

export default Title;
