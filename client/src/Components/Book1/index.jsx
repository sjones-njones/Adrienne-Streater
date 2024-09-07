import { Card, Col, Row, Image, Button } from "react-bootstrap";

import Book1Pic from '../../assets/images/book1.png';
import '../../App.css';

const Book1 = () => {
  return (
    <div className=''>
      <h1 className='lifeSavers fw-bolder pb-4 text-white'> The Whimsical Journey of Ari and Her Amazing AFOs - Book 1</h1>
           <Row className="mx-5 px-5">
        <Col>
          <Image className='w-100
         ' src={Book1Pic} fluid />;
        </Col>
        <Col>
          <div className=''>
            <h3 className='openSans text-center w-50 text-white'>
            Shall we go on an adventure together? Join Ari-Elizabeth on her whimsical journey of discover as she learns that her AFOs (ankle-foot orthoses) aren't a limitation, but a gift to help others. 
            </h3>
          </div>
          <div className='mx-auto'>

         <a className='' href="https://a.co/d/iC3YyYf">
         <Button className="button-62 text-white fs-5">Order From Amazon</Button>
                 </a> 
          </div>
             
                  
        </Col>
      </Row>
    </div>
  );
};

export default Book1;



