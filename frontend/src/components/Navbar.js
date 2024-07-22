import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function nav() {
  return (
    <>
      <Navbar>
        <Container className="container" style={{"margin":"0%"}}>
          <Navbar.Brand href="/home"  style={{"color" : "aliceblue", "fontSize":"1.5rem"}}>Finance Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link style={{"color" : "aliceblue"}} href="/personal">Personal</Nav.Link>
            <Nav.Link style={{"color" : "aliceblue"}} href="/friends">Friends</Nav.Link>
            <Nav.Link style={{"color" : "aliceblue"}} href="/group">Groups</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default nav;