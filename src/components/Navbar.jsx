import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import { Container, Navbar, Nav, Button, Offcanvas, DropdownButton, Dropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div className="bg-aliceblue">
      {["md"].map((expand) => (
        <Navbar key={expand} bg="aliceblue" expand={expand} className="py-1">
          <Container>
            <Navbar.Brand href="/" className="bg-primary-darkblue px-5 text-white">
              BCR
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>BCR</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/#ourService" className="fw-bold my-2 mx-2">
                    Our Service
                  </Nav.Link>
                  <Nav.Link href="/#whyUs" className="fw-bold my-2 mx-2">
                    Why Us
                  </Nav.Link>
                  <Nav.Link href="/#testimonial" className="fw-bold my-2 mx-2">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link href="/#faq" className="fw-bold my-2 mx-2">
                    FAQ
                  </Nav.Link>
                  <Nav.Link href="/register" className="fw-bold">
                    <Button className="bg-button border-0">Register</Button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarComponent;
