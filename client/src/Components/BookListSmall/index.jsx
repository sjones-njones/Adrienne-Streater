import { Col, Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../Book.css';
import books from '../../books.js'
import { useParams } from 'react-router-dom';

const BookListSmall = () => {
  const { bookId } = useParams()

  const newFavBook = books.find((book) => book.id === bookId)
  console.log({ newFavBook });
  return (
    <div className="borders m-5">

      <div>
        <h2 className="lifeSavers mt-5 text-white"> Select Another Title</h2>
      </div>
      <Container className="containerClass" fluid="md">

        <Row xs={1} sm={1} md={2} lg={2} className="
      allBooksSmall mt-5" >
          {
            books.map((book) => (
              <Col className="" key={book.id} id={book.id}
              >
                {newFavBook.id === book.id ? (
                  <Link to={`/books/${book.id}`} className=''>
                    <Image className=" isDisabled " src={book.image} />
                  </Link>
                ) : (
                  <Link to={`/books/${book.id}`} className=''>
                    <Image className=" bookPicSmall  " src={book.image} />
                  </Link>)}
                {/* <Link to={`/books/${book.id}`} className=''>
                  <Image className=" bookPicSmall  " src={book.image} />
                </Link> */}
              </Col>
            )

            )}
        </Row>
      </Container>
    </div>
  );
};

export default BookListSmall;