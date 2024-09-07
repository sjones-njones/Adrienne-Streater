import { Card, Col, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Image } from "react-bootstrap";
import Book2Pic from '../../assets/images/book2.png';
import '../../App.css';

const Book2 = () => {
  return (
<div className=' m-4 row mx-auto'>
      <div className="col-md-7 mx-auto mx-auto">



      </div>
      <div className="my-auto mx-auto col-sm-5">
        <h2 className='fw-bold text-white'>The Whimsical Journey of Catherine-Rowe's Creative Crutches</h2>
        <div className=''>
          <h5 className='w-75 mx-auto text-start mt-5 text-white'>Meet Catherine-Rowe, a talented young artist whose creativity knows no bounds. Despite needing crutches to get around, Catherine-Rowe paints vibrant masterpieces that capture the beauty and wonder of the world around her. Her crutches are not just a symbol of her strength but also a source of inspiration reflected in the bright, colorful canvases she creates. With each brushstroke, Catherine-Rowe shows that true artistry comes from the heart, proving that with passion and imagination nothing can hold her back.</h5>
        </div>
        <h2 className='mt-5 text-white'>$19.99</h2>
      </div>


{/* 
<Card style={{ maxWidth: '540px' }}>
<Row className='g-0'>
  <Col md='4'>
    <Card.Img src= {Book2Pic} alt='...' fluid />
  </Col>
  <Col md='8'>
    <Card.Body>
      <Card.Title>The Whimsical Journey of Catherine-Rowe's Creative Crutches</Card.Title>
      <Card.Text>
        <small className='text-muted'>By Adrienne Streater</small>
      </Card.Text>
      <Card.Text>
      Meet Catherine-Rowe, a talented young artist whose creativity knows no bounds. Despite needing crutches to get around, Catherine-Rowe paints vibrant masterpieces that capture the beauty and wonder of the world around her. Her crutches are not just a symbol of her strength but also a source of inspiration reflected in the bright, colorful canvases she creates. With each brushstroke, Catherine-Rowe shows that true artistry comes from the heart, proving that with passion and imagination nothing can hold her back.
      </Card.Text>
 
    </Card.Body>
  </Col>
</Row>
</Card>  */}

        </div>
 
  );
};

export default Book2;



