import React from "react";
import { useMutation, gql } from "@apollo/client";
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  const showToastMessage = () => {

    toast("Signed Up!"
    );
  };
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleOnSubmit(event) {
    event.preventDefault();
    console.log({ name, email, password });
 
     setName("");
    setEmail("");
    setPassword("");
  }

  function handleNameOnChange(event) {
    setName(event.target.value);
  }
  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <div className='loginForm mx-auto text-start'>
           <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className='fs-5'>Enter Your Name</Form.Label>
          <Form.Control   value={name}
        onChange={handleNameOnChange} type="name" name='name' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label className='fs-5'>Enter Your Email</Form.Label>
          <Form.Control  value={email}
        onChange={handleEmailOnChange}type="name" name='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label className='fs-5'>Enter Your Password</Form.Label>
          <Form.Control  value={password}
        onChange={handlePasswordOnChange} type="password" name='password' />
        </Form.Group>
        
        <button className="button-62"  onClick={showToastMessage} type="submit">
          Sign Up
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
        theme='dark'
        className= "my-toast-container"
      />
          </Form>
    </div>
   
    </div>
  );
};

export default Signup;