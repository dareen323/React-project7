

import React from 'react';
import Form from 'react-bootstrap/Form';
import Quote from '../../pages/qoute/qoute'
import Footer from '../footer/Footer';
import './styles.css';
export default function Contact() {
  return (
    <div>
      <div class="content  w-100 d-flex justify-content-around align-items-center">
   <div class="container bg-light p-5 m-2 con ">
<div class="row oh">
<div class="col-md-5 mr-5 hi ">
<h2>Contact Us</h2>
<p class="mb-5">We can hear you tell us how ca we help you !</p>
<ul class="list-unstyled pl-md-5 mb-5">
<li class="d-flex text-black mb-2 justify-content-center ">
<span class="mr-3"><span class="icon-map"></span></span> 34 Street Name, Amman, Jordan<br/>  
</li>
<li class="d-flex text-black mb-2 justify-content-center"><span class="mr-3"><span class="icon-phone"></span></span> +1 (222) 345 6789</li>
<li class="d-flex text-black justify-content-center"><span class="mr-3"><span class="icon-envelope-o"></span></span> info@mywebsite.com </li>
</ul>
</div>
<div class="col-md-7">
<form class="mb-5" method="#" id="contactForm" name="contactForm" >
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-dark fw-bold'>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-dark fw-bold'>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-dark fw-bold'>Massage</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
<div class="row">
<div class="col-md-12">
<input type="submit" value="Send Message" class="btn btn-success rounded-0 py-2 px-4"/>
{/* <span class="submitting"></span> */}
</div>
</div>
</form>
</div>
</div>

</div>


<Quote className=''/>
</div>
<Footer/>
    </div>
  )
}

