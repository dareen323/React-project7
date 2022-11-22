import React from 'react'
import logo from '../../components/assets/logo.png';
import './styles.css'
import Footer from '../footer/Footer';
export default function About() {
  return (
    <div className='about'>
  
    <div>
      <img src='https://img.freepik.com/premium-photo/about-us-multicolor-inscription-white-brick-wall-with-doodle-icons-around-about-us-concept-modern-style-illustration-with-doodle-design-icons-about-us-white-brickwall-background_226262-1853.jpg?w=2000' className='w-50 mt-4 bg-light'/>
    </div>
        
        <div className="m-4 bg-light p-1 ">
          <h2 className="text-dark">“A room without books is like a body without a soul”</h2>
          <p className="text-dark">Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.</p>
          <p className="text-dark"> Brand Book is here for you There is no friend as loyal as a book.</p>
        </div>
    
        <Footer/>

</div>
  )
}
