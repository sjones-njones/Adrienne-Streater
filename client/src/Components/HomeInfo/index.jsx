import { Card, Col, Row } from "react-bootstrap";
import GridLayout from "react-grid-layout";
import '../../Home.css';

const HomeInfo = () => {
  const width = 2.25;
  const height = 5.75;
  const firstRowX = 0;
  const firstRowY = 0;
const secondRowX = 2.25;
const thirdRowX = 4.5;
const thirdRowY = 0;
  const layout = [
    { i: "a", x: firstRowX, y: firstRowY, w: width, h: height },
    { i: "b", x: firstRowX, y: firstRowY,w: width, h: height},
    { i: "c", x: firstRowX, y: firstRowY,w: width, h: height},
    { i: "d", x: firstRowX, y: firstRowY, w: width, h: height },
    { i: "e", x: secondRowX, y: firstRowY, w: width, h: height },
    { i: "f", x: secondRowX, y: firstRowY, w: width, h: height},
    { i: "g", x: secondRowX, y: firstRowY, w: width, h: height},
    { i: "h", x: secondRowX, y: firstRowY, w: width, h: height },
    { i: "i", x: thirdRowX, y: thirdRowY, w: width, h: height },
    { i: "j", x: thirdRowX, y: thirdRowY, w: width, h: height },
    { i: "k", x: thirdRowX, y: thirdRowY, w: width, h: height },
    { i: "l", x: thirdRowX, y: thirdRowY, w: width, h: height}


  ];

  return (
   <div>
<Row>
  <Col>
<Card className='homeCard'>
        <Card.Img className='homePic mx-auto' variant="top" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Fadrienne-streater%20(1).jpg?alt=media&token=b0a3baea-996d-45bc-8b91-e16561521d07" alt="Picture of Adreinne Steater" />
        <Card.Body>
          <Card.Text className="fs-1 text-center text-white">
            Adrienne Streater
          </Card.Text>
          <Card.Text className="fs-3 mt-4 text-center text-white">
            Author, Mother, Special Needs Advocate
          </Card.Text>
        </Card.Body>
      </Card>
  </Col>
  <Col>
 <div className="boxes">
 <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={26}
        width={1200}
      >
        <div className="text-center square1"key="a">Mother</div>
        <div className="square2"key="b">b</div>
        <div className="square3"key="c">c</div>
        <div className="square1"key="d">d</div>
        <div className="square2"key="e">e</div>
        <div className="square3"key="f">f</div>
        <div className="square1"key="g">g</div>
        <div className="square2"key="h">h</div>
        <div className="square3"key="i">i</div>
        <div className="square1"key="j">j</div>
        <div className="square2"key="k">k</div>
        <div className="square3"key="l">l</div>
      </GridLayout>
</div>
  </Col>
</Row>
   </div>
  );
};

export default HomeInfo;
