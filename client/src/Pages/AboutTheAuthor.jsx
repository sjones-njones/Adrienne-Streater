import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { FIND_ALL_LIST } from '../../Utils/Queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from "react-bootstrap";
// import { name } from '@cloudinary/url-gen/actions/namedTransformation';
import '../Home.css';
const AboutTheAuthor = (item) => {
  const {
    email,

  } = item;

  const { loading, error, data } = useQuery(FIND_ALL_LIST);

  // const [data, setProduct] = useState([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(i);
  }


  return (
    <div>
      <Row xs={12} sm={8} md={3} lg={4} className="m-1 g-4">
        {data.lists.toReversed().map((lists) => (
          <Col key={lists._id} _id={lists._id}
          >
              <Card className='border-warning hover bg-black h-100'>
                <Card.Body>
                  <Card.Title className='fs-3 text-white'>{lists.name}</Card.Title>
                </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutTheAuthor;




