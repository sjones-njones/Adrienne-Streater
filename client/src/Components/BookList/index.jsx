import { Card, Col, Row } from "react-bootstrap";
import Book1 from '../../assets/images/book1.png'
import Book2 from '../../assets/images/book2.png'
import { Link } from "react-router-dom";
import '../../Book.css';
const BookList = () => {

  return (
    <div>

    <div>
      <h1> The Whimsical Journey Series</h1>
<h3>By Adrienne Streater</h3>
      {/* <Img>{Book1}</Img> */}


</div>
<div className="">
<Link className='links' to={'/books/book1'}>

    <Card style={{ maxWidth: '540px' }}>
      <Row className='g-0'>
        <Col md='4'>
          <Card.Img src= {Book1} alt='...' fluid />
        </Col>
        <Col md='8'>
          <Card.Body>
            <Card.Title>The Whimsical Journey of Ari and her Amazing AFOs</Card.Title>
            <Card.Text>
              {/* <small className='text-muted'>By Adrienne Streater</small> */}
            </Card.Text>
            <Card.Text>
              Shall we go on an adventure together? Join Ari-Elizabeth on her whimsical journey of discover as she learns that her AFOs (ankle-foot orthoses) aren't a limitation, but a gift to help others. 
            </Card.Text>
            <Card.Text>
              <small className='text-muted'>2023</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    </Link>

    <Link className='links' to={'/books/book2'}>

    <Card style={{ maxWidth: '540px' }}>
      <Row className='g-0'>
        <Col md='4'>
          <Card.Img src= {Book2} alt='...' fluid />
        </Col>
        <Col md='8'>
          <Card.Body>
            <Card.Title>The Whimsical Journey of Catherine-Rowe's Creative Crutches</Card.Title>
            <Card.Text>
              {/* <small className='text-muted'>By Adrienne Streater</small> */}
            </Card.Text>
            <Card.Text>
             Meet Catherine-Rowe. A talented young artist whose creativity knows no bounds. Despite needing crutches to get around, Catherine-Rowe paints vibrant masterpieces that capture the beauty and wonder of the world around her. Her crutches are not just a symbol of her strength but also a source of inspiration reflected in the bright, colorful canvas she creates. With each brushstroke, Catherine-Rowe shows that true artistry comes from the heart, proving that with passion and imagination, nothing can hold her back. 
            </Card.Text>
            <Card.Text>
              <small className='text-muted'>2024</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
</Link>
    </div>
    </div>

  );
};

export default BookList;


