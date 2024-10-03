import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from "react-bootstrap";
import '../../App.css';
import '../../Nav.css';
import Dropdown from 'react-bootstrap/Dropdown';
import PlaceholderImage from '../../assets/images/placeHolderPhoto.png';

function NavTabs() {

  const currentPage = useLocation().pathname;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="ml-5 nav-link justify-content-center">
        <Link to='/'>
          <img className="my-3 mx-5" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogos%2FIMG_20240926_112956.jpg?alt=media&token=1d6ef872-c306-4172-b193-4a0d74c12e74" alt="Adrienne Streater's Logo" style={{ width: 150, height: 125 }} />
        </Link>
        <Navbar.Brand >
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="toggle" id="responsive-navbar-nav">
          <Nav className="me-auto fs-2 voor">
            <Nav.Link className={currentPage === '/' ? 'nav-link  active' : 'nav-link '} href="/">Home</Nav.Link>

            <Nav.Link className={currentPage === '/books' ? 'nav-link active' : 'nav-link'} href="/books">Books</Nav.Link>
            <Nav.Link className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'} href="/contact">Contact</Nav.Link>
            <NavDropdown title="About" id="collapsible-nav-dropdown">
              <NavDropdown.Item className="fs-3" href="/aboutTheAuthor">About the Author</NavDropdown.Item>
              <NavDropdown.Item className="fs-3" href="/aboutTheFamily">
                About the Streater Family
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
          <Dropdown.Divider />

          <Nav >
            <Row >
              <Col>
                <a href="">
                  <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogos%2Ficons8-threads-48.png?alt=media&token=4a2777e1-1fb7-463b-bc1a-99c63b4ed1b6' alt="Threads Logo"
                    style={{ width: 50, height: 50 }} />
                </a>
              </Col>
              <Col>
                <a href="https://www.youtube.com/@TheSupportingActorPodcast/featured">
                  <img className='mt-1 logo' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogos%2Ficons8-youtube-50.png?alt=media&token=1db90a77-c159-43a0-a2f4-e85bf0404016" alt="YouTube Logo"
                    style={{ width: 40, height: 40 }} />
                </a>
              </Col>
              <Col>
                <a href="https://www.facebook.com/adrienne.streater.7">
                  <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogos%2Ficons8-facebook-logo-50.png?alt=media&token=62cd7b25-e51e-4597-8023-76f7cb1d1e8d" alt="Facebook Logo"
                    style={{ width: 50, height: 50 }} />

                </a>
              </Col>
              <Col>
                <a href="https://podcasters.spotify.com/pod/show/thesupportingactorpodcast">
                  <img className='mt-1 logo' src='https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogos%2F1727368930655.png?alt=media&token=f20754d0-5e33-4388-a968-f39891e6fb4b' alt="Spotify Logo"
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