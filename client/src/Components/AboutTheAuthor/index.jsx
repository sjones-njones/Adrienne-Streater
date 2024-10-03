import Carousel from 'react-bootstrap/Carousel';
import { Image, Card, Row, Col } from "react-bootstrap";
import '../../App.css';
function AboutTheAuthor() {

  return (

    <div className=' '>
   <Card
      className='cardFull'>
        <Card.Title className='cardTitle'>Adrienne C. Streater</Card.Title>
       
            <Card.Img className='cardImage' src=" https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Ffamily%20pics%2FIMG_20240926_112943.jpg?alt=media&token=61d6af39-b8bc-4422-937f-d223d6968580" />
        
            <Card.Body>
              <Card.Text className=' lifeSavers cardText'>
                Adrienne C. Streater is a globetrotting southern belle on a mission to educate and empower families and communities with whimsical innovation, diverse representation, and Biblical communication.
                <br></br>
                <br></br>

                Hailing from Columbia, South Carolina, Adrienne attended the College of Charleston where she received a Bachelor of Arts degree in Theater with a minor in Dance. She later went on to obtain an Associates degree in Film Production from Trident Technical College and a Masters Degree in Business Administration from Webster University in London.
                <br></br>
                <br></br>

                Now, as a creative entrepreneur and Biblical thought leader, Adrienne hs answered the call to champion and empower people with whimsy and the Word. She is the founder and CEO of Whimsical Paper LLC and the host of The Supporting Actor podcast.
                <br></br>
                <br></br>

                Adrienne and her husband, Douglas, are the proud parents of two miracle daughters. At the age of sixteen, doctors said it would be impossible for her to conceive, but God had the final say.
                <br></br>
                <br></br>

                The joyful, truth of God's Word is the unshakable foundation upon which Adrienne stands. Her passion is to bring people everywhere into personal relationship with Jesus Christ, in hopes of creating a whimsical chain reaction of positive impact that improves and empowers people's lives on Earth as in Heaven.
              </Card.Text>
            </Card.Body>
          
      </Card>

    </div>




  );
}
export default AboutTheAuthor;