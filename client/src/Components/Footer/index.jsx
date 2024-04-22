import { Button, Form, Image, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_TO_LIST } from '../../../Utils/Mutations';
import '../../Home.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const [addEmail, { error }] = useMutation(ADD_TO_LIST);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {

      const { data } = await addEmail({
        variables: { email },
      });
      // window.location.reload();

    } catch (err) {
      console.log(err);

    }
  };

  return (
    <footer className="d-block p-5">
      <Row>
        <Col>
        <div className="text-start">
        <img className=""src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FSJe.png?alt=media&token=36547ff8-4a02-4372-8436-43db09f9b1ba" alt="SJ Designs" style={{ width: 150, height: 150 }} />

      </div>
        </Col>
             <Col>
              <Form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleOnSubmit}
      >
        <h4 className='my-auto mx-auto'>Want to receive updates?</h4>
        <div className="m-1 d-block">
          <input
            placeholder="Email Address"
            value={email}
            className="form-input"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="">
          <button className="button-62" type="submit">
            Submit
          </button>
        </div>
        {error && (
          <div className=" my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </Form>
      </Col>
      </Row>
      </footer>
  );
};

export default Footer;





