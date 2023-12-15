import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// const SearchBar = () => {
//   const [input, setInput] = useState("");
// };

function NavScrollExample() {
  // const handleChange = (value) => {
  //   setInput(value);
  // };

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container fluid>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              fontSize: "20px",
            }}
            navbarScroll
          >
            <a
              href="#action1"
              style={{
                textDecoration: "none",
                color: "#0f6bbbc9",
                fontWeight: "bold",
              }}
            >
              Rick and Morty
            </a>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              // value={input}
              // onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
