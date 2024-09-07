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
//   const color1 = ["#ECBC54", "#F9943B", "#F9728C"]
// const color2 = ["#298C9B", "#A159F4"   ]
  return (
    <div>
      {/* <ParticlesBg color= {color1} num={4} type='circle' bg={true} />
           <ParticlesBg color= {color2} num={1} type='circle' bg={true} />  */}

  
     <div className='contactForm mx-auto text-start'>

     <div className=' sizingForm mx-auto text-start'>
            <Form ref={form} onSubmit={sendEmail}>
         <Form.Group className="" controlId="exampleForm.ControlInput1">
           <Form.Label className='fs-4 workSans text-black'>Name</Form.Label>
           <Form.Control className="border-black" type="name" name='name' />
         </Form.Group>
 
         <Form.Group className="" controlId="exampleForm.ControlInput1">
           <Form.Label className='fs-4 workSans text-black'>Email</Form.Label>
           <Form.Control className="border-black" type="name" name='email' />
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label className='fs-4 workSans text-black'>Message</Form.Label>
           <Form.Control className="border-black" as="textarea" rows={10} type="name" name='message' col="10" />
         </Form.Group>
         <button className="button-62 fs-5" onClick={showToastMessage} type="submit">
           Send
         </button>
         <ToastContainer
         position='top-center'
         autoClose={5000}
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


