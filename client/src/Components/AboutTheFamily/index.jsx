import Carousel from 'react-bootstrap/Carousel';
import { Image, Row, Col } from "react-bootstrap";
import '../../About.css';
import '../../App.css';

function AboutTheFamily() {

  return (

    <div className='family'>
      <h1 className='title voor'>The Streater Family</h1>
      <Row  xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}
      >
  <Col className=''>
  <Carousel className=''>
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
  </Col>
  <Col>
  <h5 className='text lifeSavers'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti inventore quisquam. Reprehenderit eius eaque repellat magnam excepturi laborum! Eius in adipisci minus nihil odio nemo sapiente ex ipsum totam.</h5>
  </Col>
</Row>
        
      </div>
    


  );
}
export default AboutTheFamily;