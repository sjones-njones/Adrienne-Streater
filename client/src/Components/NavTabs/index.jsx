import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image, Container } from "react-bootstrap";

function NavTabs() {

  const currentPage = useLocation().pathname;
  return (
    <>
      <div className=' text-center'>

      </div>
      <>
        <Navbar className="justify-content-center">
        <Link to='/'>
          <img className="my-3 mx-5" src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FLogo-AS.png?alt=media&token=d6bb496a-a9dc-474a-b2a3-93d05498247d" alt="Adrienne Streater's Logo" style={{ width: 200, height: 150 }} />
        </Link>
          <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <NavDropdown title="About" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/aboutTheAuthor">About the Author</NavDropdown.Item>
                  <NavDropdown.Item href="/aboutTheFamily">
                    About the Streater Family
                  </NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href="/media">Media</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
              <Nav>
              <p className="mx-1 my-4 fs-5">
        Follow us on:
        </p>
        <Nav.Link href="">
          <Image className='' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Fthreads-logo-threads-icon-transparent-free-png.webp?alt=media&token=46a6d4fb-1704-4a43-b09e-79eb750f0e58" alt="Threads Logo"
            style={{ width: 50, height: 50 }} />

                </Nav.Link>
                <Nav.Link
                href="https://www.youtube.com/@TheSupportingActorPodcast/featured">
                <Image  className='my-1' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FSeekPng.com_youtube-png_23642.png?alt=media&token=f1fb7777-d17d-4450-b526-29038aeb6ea3" alt="YouTube Logo"
                   style={{ width: 40, height: 40 }} />


                </Nav.Link>
                <Nav.Link
                href="https://www.facebook.com/profile.php?id=100057059155776">
          <Image  className='' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2Fpngkey.com-facebook-black-png-902640.png?alt=media&token=23407f95-eeb9-4ca0-b5b0-ff451c9c979f" alt="Facebook Logo"
            style={{ width: 50, height: 50 }} />

                </Nav.Link>
           
                <Nav.Link
                href="https://podcasters.spotify.com/pod/show/thesupportingactorpodcast">
          <Image className='my-1' src="https://firebasestorage.googleapis.com/v0/b/adrienne-steater.appspot.com/o/Images%2FSpotify-Logo-TRANSPARENT-White-5.png?alt=media&token=0fac167e-21b5-46b7-9157-d6cfb96b4dc3" alt="Spotify Logo"
            style={{ width: 40, height: 40 }} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
     

          <div>
          

     
        
      
       
            </div>
    </>
  );
}

export default NavTabs;