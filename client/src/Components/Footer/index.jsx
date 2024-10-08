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
      // window.location.reload();

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
        <Row className="footerForm" xs={1} sm={1} md={3} lg={3} xl={3} xxl={3}>
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


        </Row>
        <p className='text-white lifeSavers fs-5 fw-bold'>Created by: SJ Designs 2024</p>
      </Form>

    </div>
  );
}

export default Footer;


//   <footer>
//     <Container fluid className='footer'>
//       <Form
//         className="updates"
//         onSubmit={handleOnSubmit}
//       >
{/* <Row className=''>
  <Col>
    <h4 className='text-black fs-3 text-end lifeSavers fw-bolder'>Want to receive updates?</h4>
  </Col>
  <Col md="auto">
    <div className="position-absolute bottom-0 end-0">
      <input
        placeholder="Email Address"
        value={email}
        className=" bg-white text-black w-100 text-center form-input workSans"
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
  </Col>
  <Col xs lg="2">
    <div className="text-center mr-3  ">
      <button className="button-62 mb-2" type="submit">
        Submit
      </button>
    </div>
    {error && (
      <div className="">
        Something went wrong...
      </div>
    )}
  </Col>
</Row> */}

//       </Form>
//       {/* </Row> */}
//     </Container>
//   </footer>
// );

// return (
  // <footer className=" footer d-block">
  //   <Row>
  //     <Col>
  //     <div className="text-start logo">
  //     <img className="ml-3 mt-1 mb-1"src={SJDesigns} alt="SJ Designs" style={{ width: 155, height: 65 }} />
  //   </div>
  //     </Col>
  //          <Col>
  //           <Form
  //     className="form flex-row justify-center justify-space-between-md align-center"
  //     onSubmit={handleOnSubmit}
  //   >
  //     <h4 className='my-auto text-white fs-3 lifeSavers fw-bolder mx-auto'>Want to receive updates?</h4>
  //     <div className=" mr-5 d-block">
  //       <input
  //         placeholder="Email Address"
  //         value={email}
  //         className="workSans form-input"
  //         onChange={(event) => setEmail(event.target.value)}
  //       />
  //     </div>

  //     <div className="">
  //       <button className="button-62 fs-5 mb-1 mr-3" type="submit">
  //         Submit
  //       </button>
  //     </div>
  //     {error && (
  //       <div className=" my-3 bg-danger text-white p-3">
  //         Something went wrong...
  //       </div>
  //     )}
  //   </Form>
  //   </Col>
  //   </Row>
  //   </footer>
  // );
//   <Footer>

//   </Footer>
// );
// };

// export default Footer;






