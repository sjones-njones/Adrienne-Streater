
import { Col, Row, Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book2Pic from '../../assets/images/book2.png';
import '../../App.css';

const Book2 = () => {
  return (
    <div>
      <h1 className='lifeSavers fw-bolder bookTitle pb-4 text-white'>The Whimsical Journey of Catherine-Rowe's Creative Crutches - Book 2</h1>
      <Row className='mx-auto bookRow' xs={1} md={1} lg={2}>
        <Col className="image">
          <Image className='bookPic 
         ' src={Book2Pic} fluid />;
           <div className='text-center pt-5 pb-2'>
              {/* <small className=' text-white workSans fs-4'>$19.99</small> */}
            </div>
          
        </Col>
        <Col>
          <p className='book2Text mx-auto workSans'>
            Meet Catherine-Rowe, a talented young artist whose creativity knows no bounds. Despite needing crutches to get around, Catherine-Rowe paints vibrant masterpieces that capture the beauty and wonder of the world around her. Her crutches are not just a symbol of her strength but also a source of inspiration reflected in the bright, colorful canvases she creates. With each brushstroke, Catherine-Rowe shows that true artistry comes from the heart, proving that with passion and imagination nothing can hold her back.
          </p>
          <div>


          
          </div>


        </Col>

      </Row>
      <a className='bookButtonPlacement' href="https://a.co/d/gGVbBgF">
              <Button className="lifeSavers bookButtonPlacement btn-hover">Order From Amazon  $19.99</Button>
            </a>
      
    </div>
  );
};



export default Book2;






