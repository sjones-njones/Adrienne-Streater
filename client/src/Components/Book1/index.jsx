import { Col, Row, Image, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from '../../Components/BookList';
import Swirl from '../../assets/images/swirls-png-33388.png'
import '../../App.css';
import Book1Pic from '../../assets/images/book1.png'


import { useParams } from 'react-router-dom';
import books from '../../books.js';

const Book1 = () => {
  const { bookId } = useParams()

  const newFavBook = books.find((book) => book.id === bookId)
  if (!newFavBook) {
    return <p>{`This page doesn't contain fav Books`}</p>
  }
  return (
    <div>
      <h1 className='lifeSavers fw-bolder bookTitle pb-5 mb-5 text-white'>{newFavBook.title}</h1>
      <Row className='mx-auto bookRow' xs={1} md={1} lg={2}>
        <Col className="" key={newFavBook.id} id={newFavBook.id}>
          <Image fluid className='bookPic' src={newFavBook.image} alt={newFavBook.title} />

        </Col>
        <Col>
          <p className= {`mx-auto workSans ${newFavBook.class}`}>

            {newFavBook.description}
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



