import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import '../App.css';
import AboutTheAuthorComp from "../../src/Components/AboutTheAuthor";
import BookListBottom from '../../src/Components/BookListBottom';

const AboutTheAuthor = () => {
  return (
    <div>
  <AboutTheAuthorComp />
  <BookListBottom />
    </div>
  
  
    // <div>
           

    //   <p className='fs-1 fw-bolder text-center lifeSavers'>
    //   Coming Soon

    //   </p> 
    //   <Card className='homeCard'>
    //     <Card.Img className='' variant="top" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Fadrienne-streater%20(1).jpg?alt=media&token=b0a3baea-996d-45bc-8b91-e16561521d07" alt="Picture of Adreinne Steater" />
    //     <Card.Body>
    //       <Card.Text className="fs-1 text-center text-white">
    //         Adrienne Streater
    //       </Card.Text>
    //       <Card.Text className="fs-3 text-center text-white">
    //         Author, Mother, Special Needs Advocate
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   </div>
  );
};

export default AboutTheAuthor;




