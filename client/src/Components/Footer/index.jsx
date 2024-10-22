import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { ADD_TO_LIST } from '../../../Utils/Mutations';
import '../../Home.css';
import '../../App.css';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import "../../Footer.css";
const Footer = () => {
  const [email, setEmail] = useState('');

  const [addEmail, { error }] = useMutation(ADD_TO_LIST);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {

      const { data } = await addEmail({
        variables: { email },
      });

    } catch (err) {
      console.log(err);

    }
    setEmail("");
  };

  return (
    <div>

      <Form
        className="footer"
        onSubmit={handleOnSubmit}
      >
        <div className=" subTitleDivFooter">
          <h1 className="subTitleFooter">Let's Be Whimsical Together!</h1>
        </div>
        <Row className="m-4 footerForm" xs={1} sm={1} md={3} lg={3} xl={3} xxl={3}>
          <Col xs={12} sm={12} md={4} className='updates'>
            Want Updates?</Col>
          <Col className=''>
            <Form.Control value={email}
              className=" lifeSavers formBlank" id="inlineFormInputName" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)}
            />
          </Col>
          <Col className='buttonCol'>
            <Button className=' lifeSavers btn-footer' type="submit">Submit</Button>
          </Col>
          <p className='p-2 mx-auto text-white lifeSavers fs-4 fw-bold'>Created by: SJ Designs 2024</p>
        </Row>
      </Form>

    </div>
  );
}
export default Footer;




