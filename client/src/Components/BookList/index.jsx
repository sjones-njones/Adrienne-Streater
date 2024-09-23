import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../Book.css';
import books from '../../books.js'

const BookList = () => {

  return (
    <div>

      <div>
        <h1 className="voor title"> The Whimsical Journey Series</h1>
        <h3 className="author lifeSavers">By: Adrienne Streater</h3>
      </div>
      <Container fluid="md">

      <Row xs={1} sm={1} md={2} lg={2} className="allBooks">
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
      </Container>
    </div>
  );
};

export default BookList;


