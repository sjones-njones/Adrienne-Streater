
import React from "react";
import { useMutation, gql } from "@apollo/client";
import { Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ".././Home.css";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleOnSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  }

  function handleEmailOnChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordOnChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
            <div className='sizingForm mx-auto text-start'>
        <Card className="mx-auto w-50">

          <Form className="mx-auto loginForm" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='fs-5 '>Email</Form.Label>
              <Form.Control value={email}
                onChange={handleEmailOnChange} type="email" name='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className=' fs-5'>Enter Your Password</Form.Label>
              <Form.Control value={password}
                onChange={handlePasswordOnChange} type="password" name='password' />
            </Form.Group>

            <button className="button-62" type="submit">
              Login
            </button>
            
            
          </Form>
        </Card>
        <Card className="mt-2 w-50 mx-auto">

          <p className="fs-5 text-center">No Account? Sign Up Now </p>
           
          <a className="mx-auto" href='/SignUp'>

            <button className=" button-62 text-center my-2" type="submit">
              Sign Up
            </button>
          </a>

        </Card>
        <Button onClick={handleShow} className="btn btn-link sizeLogin text-decoration-none text-secondary d-none  fs-5 mx-0 mt-3">Forgot Your Password? </Button>
      </div>
    </div>

  );
};

export default Login;