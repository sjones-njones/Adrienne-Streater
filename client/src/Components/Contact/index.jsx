import { Section } from '@react-email/components';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import '../../App.css';
import '../../Home.css';
import '../../Contact.css';

import Background from '../Background';
import ParticlesBg from 'particles-bg';



const Contact = () => {
 const showToastMessage = () => {

    toast("Thank you for your message! We will get back to you shortly!"
    );
  };
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    showToastMessage();
    emailjs.sendForm('service_9x2z8im', 'template_5namvao', form.current, {
      publicKey: 'qOPn5V6Z_82xgnHsv',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()
  };
  return (
    <div>

  
     <div className='contactForm mx-auto text-start'>

     <div className=' sizingForm mx-auto text-start'>
            <Form ref={form} onSubmit={sendEmail}>
         <Form.Group className="" controlId="exampleForm.ControlInput1">
           <Form.Label className='fs-3 fw-bold lifeSavers text-white '>Name</Form.Label>
           <Form.Control required className="formBorder" type="name" name='name' />
         </Form.Group>
 
         <Form.Group className="" controlId="exampleForm.ControlInput1">
           <Form.Label className='fs-3 fw-bold lifeSavers text-white '>Email</Form.Label>
           <Form.Control required className="formBorder" type="email" name='email' />
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label className='fs-3 fw-bold lifeSavers text-white '>Message</Form.Label>
           <Form.Control required className="formBorder" as="textarea" rows={10} type="name" name='message' col="10" />
         </Form.Group>
         <Button className="btn-contact fs-5"  type="submit">
           Send
         </Button>
         <ToastContainer
         position='top-center'

         autoClose={3000}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme='light'
         className= "my-toast-container"
       /> 
       </Form>
     </div>
       


        </div>
        </div>
  )
}

export default Contact








 

    

