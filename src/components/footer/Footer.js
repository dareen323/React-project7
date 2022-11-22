import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import './styles.css'
export default function Footer() {
  return (
    <MDBFooter bgColor='' className='text-center text-lg-start text-white fw-bolder footer' >
      <section className='d-flex-column justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className='text-center' >
        © 2022 Copyright:
        <a className='text-reset fw-bold text-white' href='/'>
          BrandBook.com
        </a>
      </div>
        <div>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
    
    </MDBFooter>
  );
}