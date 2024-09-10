import { Col, Row, Image, Button } from "react-bootstrap";

import Book1Pic from '../../assets/images/book1.png';
import '../../App.css';

const Book1 = () => {
  return (
    <div className=''>
      <h1 className='lifeSavers fw-bolder bookTitle pb-4 text-white'> The Whimsical Journey of Ari and Her Amazing AFOs - Book 1</h1>
      <Row className='mx-auto bookRow' xs={1} md={1} lg={2}>
        <Col className="image">
          <Image className='bookPic 
         ' src={Book1Pic} fluid />;
        </Col>
        <Col>
            <p className='bookText mx-auto workSans'>
            Shall we go on an adventure together? Join Ari-Elizabeth on her whimsical journey of discover as she learns that her AFOs (ankle-foot orthoses) aren't a limitation, but a gift to help others. 
            </p>
            <div>
              

          <div className='text-center pt-5 pb-2'>
<small className=' text-white workSans fs-4'>$19.99</small>
              </div>              
         <a className='bookButtonPlacement' href="https://a.co/d/iC3YyYf">
         <Button className="lifeSavers bookButtonPlacement btn-hover">Order From Amazon</Button>
                 </a> 
          </div>
             
                  
        </Col>
      </Row>
    </div>
  );
};



export default Book1;



