import { Card, Col, Row, Image, Container } from "react-bootstrap";
import Book1 from '../../assets/images/book1.png';
import Book2 from '../../assets/images/book2.png';
import { Link } from "react-router-dom";
import '../../Book.css';
import books from '../../books.js'

const BookList = () => {

  return (
    <div>

      <div>
        <h1> The Whimsical Journey Series</h1>
        <h3>By Adrienne Streater</h3>
      </div>

      <Row xs={1} sm={1} md={2} lg={2} className="mx-auto">
        {
          books && books.map((book) => (
            <Col className="" key={book.id} id={book.id}
            >              
            <Link to={`/books/${book.id}`} className='text-blue-600 underline'>
                <Image className="w-50" src={book.image} />
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default BookList;


