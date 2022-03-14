import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="img/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Noutes
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
