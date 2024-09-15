import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from "react-bootstrap";
import '../../App.css';
import Dropdown from 'react-bootstrap/Dropdown';

function NavTabs() {

  const currentPage = useLocation().pathname;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="ml-5 nav-link justify-content-center">
        <Link to='/'>
          <img className="my-3 mx-5" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogo-AS.png?alt=media&token=d6bb496a-a9dc-474a-b2a3-93d05498247d" alt="Adrienne Streater's Logo" style={{ width: 150, height: 125 }} />
        </Link>
        <Navbar.Brand className="">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="toggle" id="responsive-navbar-nav">
          <Nav className="me-auto fs-2 voor">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            {/* <Nav.Link href="/media">Media</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
              <NavDropdown.Item className="fs-4" href="/aboutTheAuthor">About the Author</NavDropdown.Item>
              <NavDropdown.Item className="fs-4" href="/aboutTheFamily">
                About the Streater Family
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
          <Dropdown.Divider />

          <Nav>
            <Row>
              {/* 
              <p className="fs-3 fw-bold text-black text-center  lifeSavers">
                Follow us on:
              </p> */}
              <Col>
                <a href="">
                  <img className='' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Fthreads-logo-threads-icon-transparent-free-png.webp?alt=media&token=46a6d4fb-1704-4a43-b09e-79eb750f0e58" alt="Threads Logo"
                    style={{ width: 50, height: 50 }} />
                </a>
              </Col>
              <Col>
                <a href="https://www.youtube.com/@TheSupportingActorPodcast/featured">
                  <img className='mt-1' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FSeekPng.com_youtube-png_23642.png?alt=media&token=f1fb7777-d17d-4450-b526-29038aeb6ea3" alt="YouTube Logo"
                    style={{ width: 40, height: 40 }} />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/profile.php?id=100057059155776">
                  <img className='' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Fpngkey.com-facebook-black-png-902640.png?alt=media&token=23407f95-eeb9-4ca0-b5b0-ff451c9c979f" alt="Facebook Logo"
                    style={{ width: 50, height: 50 }} />

                </a>
              </Col>
              <Col>
                <a href="https://podcasters.spotify.com/pod/show/thesupportingactorpodcast">
                  <img className='mt-1' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FSpotify-Logo-TRANSPARENT-White-5.png?alt=media&token=0fac167e-21b5-46b7-9157-d6cfb96b4dc3" alt="Spotify Logo"
                    style={{ width: 40, height: 40 }} />
                </a>
              </Col>
            </Row>
          </Nav>
          <Dropdown.Divider />

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavTabs;