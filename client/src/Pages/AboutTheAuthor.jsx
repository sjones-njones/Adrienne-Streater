import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { FIND_ALL_LIST } from '../../Utils/Queries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from "react-bootstrap";
import '../Home.css';
import '../App.css';

const AboutTheAuthor = (item) => {
  return (
    <div>
      <p className='fs-1 m-5 fw-bolder text-center lifeSavers'>
      Coming Soon
      </p>
      </div>
  );
};

export default AboutTheAuthor;




