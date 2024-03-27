import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <>
      {/* Chose basic dark template. Once we settle on a color scheme and all that jazz, we can greatly modify the basic a$$ bootstrap stuff */}
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{ width: "100%", fontFamily: "Onick", color: "whitesmoke", maxWidth: "100%", alignContent: "center", justifyContent: "center" }}>
        <Container fluid style={{ maxWidth: "100%", paddingLeft: "0", paddingRight: "0" }}>
          <Navbar.Brand className='neonText' style={{ WebkitTextStroke: '1px black', MozTextStroke: '1px black', OTextStroke: '1px black', textStroke: '1px black', fontSize: "4em", marginLeft: "50px", order: 1 }} href="/">C T S P</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#ff00c1", marginLeft: "auto", border: "2px 2px solid white", margin: "0 auto", order: 2 }} />
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Starting with these three basic pages, we can add more. Maybe like a page for private parties or something? An events calendar we can try and import from google calendars or something? I dunno, just ideas! */}
              <Nav.Link href="/" style={{ color: "yellow", fontSize: "1.5em", WebkitTextStroke: '1px black', MozTextStroke: '1px black', OTextStroke: '1px black', textStroke: '1px black', margin: "20px", }}>Home</Nav.Link>
              <Nav.Link href="/menu" style={{ color: "whitesmoke", fontSize: "1.5em", WebkitTextStroke: '1px black', MozTextStroke: '1px black', OTextStroke: '1px black', textStroke: '1px black', margin: "20px" }}>Menu</Nav.Link>
              <Nav.Link href="/about" style={{ color: "whitesmoke", fontSize: "1.5em", WebkitTextStroke: '1px black', MozTextStroke: '1px black', OTextStroke: '1px black', textStroke: '1px black', margin: "20px" }}>Our Story</Nav.Link>
              <Nav.Link href="/togo" style={{ color: "whitesmoke", fontSize: "1.5em", WebkitTextStroke: '1px black', MozTextStroke: '1px black', OTextStroke: '1px black', textStroke: '1px black', margin: "20px" }}>ToGo</Nav.Link>
              <Nav.Link href="/contact" style={{ color: "whitesmoke", fontSize: "1.5em", WebkitTextStroke: '1px black', MozTextStroke: '1px black', OTextStroke: '1px black', textStroke: '1px black', margin: "20px" }}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
