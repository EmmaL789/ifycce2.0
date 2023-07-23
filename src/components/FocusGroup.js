import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

import "../App.css";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import logo from "../images/CCELogo_square.png";
import SignUpForm from "./SignUpForm";

const FocusGroup = () => {
  return (
    <div className="all-content">
      <div className="content-wrap">
        <AppNavbar />
        <div className="blue-container">
          <Container>
            <div className="white-text">
              <Row>
                <Col md="4">
                  <img className="headings" src={logo} alt="cce logo" />
                </Col>
                <Col className="headings3" md="8">
                  <h1 className="headings2">Focus Group Meeting</h1>
                  <h4>Sign up to be part of a focus group!</h4>
                  <Button
                    variant="light"
                    target="_blank"
                    href="https://bit.ly/cceify-focusgroup-reg"
                    rel="noopener noreferrer"
                  >
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
};

export default FocusGroup;