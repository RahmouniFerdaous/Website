import classes from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsGoogle, BsTwitter, BsPinterest } from "react-icons/bs";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
const Footer = () => {
  return (
    <section className={classes.a}>
      <Container>
        <Row>
          <Col className={classes.logo}>
            <RiCheckboxMultipleBlankLine />
          </Col>
          <Col>
            <p>Our Mission</p>
            <ul className={classes.square}>
              <li>ezhjfbzhbr</li>
              <li>ezhjfbzhbr</li>
              <li>ezhjfbzhbr</li>
              <li>ezhjfbzhbr</li>
              <li>ezhjfbzhbr</li>
            </ul>
          </Col>
          <Col>
            <p>About us</p>
            <ul className={classes.square}>
              <li>gtehdinqnqtyu</li>
              <li>gtehdinqnqtyu</li>
              <li>gtehdinqnqtyu</li>
              <li>gtehdinqnqtyu</li>
            </ul>
          </Col>
          <Col>
            <p>Contact centre</p>
            <ol>
              <li>Contact us:+61(0)358471254</li>
              <li>Whrite us:grtegdt@hahaha.com</li>
              <br />
              <li>Level 13, 2 Elisabeth St,</li>
              <li>Melborune, Victroia 3000</li>
              <li>Australia</li>
              <br />
              <li>
                Find us here: <BsFacebook /> <BsGoogle /> <BsTwitter />{" "}
                <BsPinterest />
              </li>
            </ol>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <center>
            {new Date().getFullYear()} All Rights Reserved. Crafted with
            &#x1F493; By Rahmouni Creations
          </center>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
