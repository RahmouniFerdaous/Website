import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
const Nav = () => {
  return (
    <div className={classes.bg}>
      <header className={classes.header}>
        <div className={classes.logo}>
          <RiCheckboxMultipleBlankLine /> Be
          <br />
          <span>HOLDING</span>
        </div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/OurBrands'>Our brands</Link></li>
            <li><Link to='/WhoWeAre'>Who we are</Link></li>
            <li><Link to='/Sustainability'>Sustainability</Link></li>
            <li><Link to='/ContactUs'>Contact</Link></li>
            <li><Link to='/BuyNow'>Buy Now</Link></li>
            <li>
              <span className={classes.badge}>
                <FaShoppingCart /> 0
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <Container>
        <Row>
          <Col>
            <h1 className={classes.box}>INNOVATIVE FOR A BETTER TOMORROW</h1>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h5 className={classes.box}>
              Lorem IPSUM DOLOR MIT SAMET PERRE OMNIBUS ARREA
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nav;
