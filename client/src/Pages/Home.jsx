import '../../src/HomePage.css';
import { Image, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../src/Book.css';
import books from '../../src/books.js';
const Home = () => {
  return (
    <div>
    
      <div>
        <h1 className="voor headTitle">
The Whimsical Paper Company
        </h1>
      </div>
      <div className="">
        <div className="bookDiv">

          <div className="">
          </div>
          <Container fluid="md">

            <h1 className=" voor title">Books by Adrienne C. Streater</h1>
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
            <h3 className="authorHome lifeSavers">The Whimsical Journey Series</h3>
          </Container>
        </div>
      </div>

      <div className=" subTitleDivWhite">
      </div>
      <div className=' '>

        <Card
          className='cardFullHome'>
          <Card.Title className='cardTitle'> Adrienne C. Streater</Card.Title>
          <Link to={`/aboutTheAuthor`} className=''>
            <Card.Img className='cardImageHome' src=" https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112943.jpg?alt=media&token=61d6af39-b8bc-4422-937f-d223d6968580" />
          </Link>
          <Row className="lifeSavers w-50 mx-auto ASDescription">
            <Col>
              Wife  </Col>
            <Col>
Mother            </Col>
            <Col>
Author            </Col>
          </Row>
          <Card.Body>
            <Card.Text className=' lifeSavers cardText'>

            </Card.Text>
          </Card.Body>

        </Card>

      </div>

      <div className=" subTitleDivWhite">
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
      
      <div className=" subTitleDivWhite">
      </div>
      <div>
        <Card
          className='supportHome'>
          <Card.Title className='cardTitle'> Traveling Support for Special Needs Families</Card.Title>
          <Link to={`/support`} className=''>
            {/* <Card.Img className='cardImageHome' src="kjhjhki" /> */}
          </Link>
          <Card.Title className='cardTitle'>Coming Soon</Card.Title>
          <Card.Body>
            <Card.Text className=' lifeSavers cardText'>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )

};

export default Home;
