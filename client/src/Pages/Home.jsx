import HomeInfo from "../Components/HomeInfo";
import BookList from '../Components/BookList';
import AboutTheAuthor from '../Components/AboutTheAuthor';
import AboutTheFamily from '../Components/AboutTheFamily';
import '../../src/HomePage.css';
import { Image, Card, Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import { Link } from "react-router-dom";
import '../../src/Book.css';
import books from '../../src/books.js';
const Home = () => {
  return (

    <div>

      <div>
        <h1 className="headTitle">The Whimsical Paper Company</h1>

        <div className="subTitleDiv">

        </div>
      </div>
      <div className="">
        <div className="bookDiv">
          <div className="">
            <h1 className=" voor title"> The Whimsical Journey Series</h1>
          </div>
          <Container fluid="md">

            <Row xs={1} sm={1} md={2} lg={2} className="w-75 mx-auto allBooks">
              {
                books && books.map((book) => (
                  <Col className="" key={book.id} id={book.id}
                  >
                    <Link to={`/books/${book.id}`} className=''>
                      <Image className="bookPic " src={book.image} />
                    </Link>
                  </Col>
                ))}
            </Row>
            <h3 className="authorHome lifeSavers">By: Adrienne Streater</h3>
          </Container>
        </div>
      </div>

      <div className=" subTitleDiv">
      </div>
      <div className=' '>

        <Card
          className='cardFullHome'>
          <Card.Title className='cardTitle'> Adrienne C. Streater</Card.Title>
          <Link to={`/aboutTheAuthor`} className=''>
            <Card.Img className='cardImageHome' src=" https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112943.jpg?alt=media&token=61d6af39-b8bc-4422-937f-d223d6968580" />
          </Link>
          <Row className="lifeSavers w-75 mx-auto ASDescription">
            <Col>
              positive words
            </Col>
            <Col>
              positive words
            </Col>
            <Col>
              positive words
            </Col>
          </Row>
          <Card.Body>
            <Card.Text className=' lifeSavers cardText'>

            </Card.Text>
          </Card.Body>

        </Card>

      </div>

      <div className=" subTitleDiv">
      </div>

      <div className=''>
        <Card
          className='familyHome'>
          <Card.Title className='cardTitle'> The Streater Family</Card.Title>
          <Link to={`/aboutTheFamily`} className=''>
            <Card.Img className='cardImageHome' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112948.jpg?alt=media&token=4a007791-95dd-45e9-a5b5-a66824f1db2b" />
          </Link>
          <Card.Title className='cardTitle'></Card.Title>
          <Card.Body>
            <Card.Text className=' lifeSavers cardText'>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div></div>
    </div>
  )

};

export default Home;
