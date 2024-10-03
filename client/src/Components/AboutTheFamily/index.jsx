import Carousel from 'react-bootstrap/Carousel';
import { Image } from "react-bootstrap";
import '../../About.css';
function AboutTheFamily() {

  return (

    <div className=' m-4 row mx-auto'>
      <div className="col-md-7 mx-auto mx-auto">

        <Carousel className='mx-auto'>
          <Carousel.Item>
            <Image
              fluid
              className="familyPic" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112948.jpg?alt=media&token=4a007791-95dd-45e9-a5b5-a66824f1db2b" alt="The Streater family reading their first book"/>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              fluid
              className="familyPic" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112945.jpg?alt=media&token=69787afb-8ab9-4f9f-aca7-d73bb2450d65" alt="The Streater family"/>
          </Carousel.Item>

          <Carousel.Item>
            <Image
              fluid
              className="familyPic" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112937.jpg?alt=media&token=7d5cbc4d-b936-433d-a1fc-93a319205220" alt="The Streater girls"/>
          </Carousel.Item>
      
        </Carousel>
      </div>
      <div className="my-auto mx-auto col-sm-5">
        <h2 className='fw-bold text-white'></h2>
        <div className=''>
          <h5 className='w-75 mx-auto text-start mt-5 text-white'></h5>
        </div>
        <h2 className='mt-5 text-white'></h2>
      </div>

    </div>


  );
}
export default AboutTheFamily;