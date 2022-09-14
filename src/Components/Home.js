import classes from "./Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaMedal } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CgArrowRight } from "react-icons/cg";
import {
  SiFilezilla,
  SiIntercom,
  SiLyft,
  SiMajorleaguehacking,
  SiKlarna,
} from "react-icons/si";
import { BsCheckLg, BsFillLightbulbFill } from "react-icons/bs";
const Home = () => {
  return (
    <section className={classes.body}>
      <div className={classes.investors}>
        <Container>
          <center>
            <Row>
              <Col>
                <h4>
                  <FaMedal /> Good for investors
                </h4>
              </Col>
              <Col>
                <p>
                  Lorem Ipsum <span>365</span> sit amet, consectuyer attum et
                  omnibu perre tuamodo perre tuamodo qualo fifi mauris in ear
                  juscy.{" "}
                </p>
              </Col>
              <Col className={classes.arrow}>
                <CgArrowRight />
              </Col>
            </Row>
          </center>
        </Container>
      </div>
      <Container>
        <br />
        <br />
        <Row>
          <Col className={classes.imgDes}>
            <img
              src="https://www.trainingjournal.com/system/files/styles/original_-_local_copy/private/AdobeStock_296312054-Web_0.jpg?itok=3pdMsfol"
              alt="manwithglasses"
              width="550px"
              height="350px"
            />
            <b>
              <span>
                Sit amet, consectuyer attum et omnibu perre tuamodo qualo fifi
                mauris in ear juscy multo beben tristique vitea.
              </span>
            </b>
          </Col>
          <Col>
            <br />
            <Row>
              <h5 className={classes.title}>Our Story</h5>
              <h6 className={classes.subtitle}>
                Peelitque multo beben tristique vitea
              </h6>
              <p className={classes.text}>
                As much mud in the streets as if the waters had but newly
                retired from the face of the earth, and it would not be
                wonderful to meet a Megalosaurus, forty feet long or so,
                waddling like an elephantine lizard up Holborn Hill.
              </p>
            </Row>
            <Row>
              <Col>
                <h5 className={classes.specialText}>ETIAM MYTUS</h5>
                <p className={classes.specialPara}>
                  It would not be wonderful to meet a Megalosaurus but newly
                  retired from the face of the earth forty feet long.
                </p>
              </Col>
              <Col>
                <span className={classes.vertical}></span>
              </Col>
              <Col>
                <h5 className={classes.specialText}>PURUS QUIZ</h5>
                <p className={classes.specialPara}>
                  {" "}
                  much mud in the streets multo beben tristique vitea waddling
                  like an elephantine lizard up Holborn Hill.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className={classes.button}>Read more</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <center>
            <br />
            <br />
            <br />
            <h5 className={classes.title}>DISCOVER OUR BRANDS</h5>
            <h6 className={classes.subtitle}>
              Forty feet long or so waddling like an elephantine lizard up
              Holborn Hill
            </h6>
          </center>
        </Row>
        <Row>
          <Col className={classes.group}>
            <center className={classes.icon}>
              <SiFilezilla />
            </center>
            <p className={classes.texticon}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
            </p>
          </Col>
          <Col className={classes.group}>
            <center className={classes.icon}>
              <SiIntercom />
            </center>
            <p className={classes.texticon}>
              There is no one who loves pain itself simply because it is pain
            </p>
          </Col>
          <Col className={classes.group}>
            <center className={classes.icon}>
              <SiLyft />
            </center>
            <p className={classes.texticon}>
              Pellentesque bibendum a enim in ullamcorper
            </p>
          </Col>
          <Col className={classes.group}>
            <center className={classes.icon}>
              <SiMajorleaguehacking />
            </center>
            <p className={classes.texticon}>
              Quisque viverra lacus ac metus ornare luctus maximus est
            </p>
          </Col>
          <Col className={classes.group}>
            <center className={classes.icon}>
              <SiKlarna />
            </center>
            <p className={classes.texticon}>
              Pellentesque ornare nulla eu risus pretium rhoncus
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={classes.ParaR}>
              Phasellus vitae blandit elit. Quisque viverra lacus ac metus
              ornare luctus. Praesent non nunc ornare, tempus erat at, maximus
              est. Pellentesque ornare nulla eu risus pretium rhoncus.
              Vestibulum sollicitudin ex et justo suscipit luctus. Cras faucibus
              euismod lorem, quis sodales lacus commodo vitae.
            </p>
          </Col>
          <Col>
            <p className={classes.ParaL}>
              Pellentesque placerat sodales aliquam. Suspendisse in porttitor
              est, non tristique sem. Aenean et sapien sit amet nulla viverra
              pretium. Nulla facilisi. Ut faucibus convallis enim, ut porta est
              dapibus sit amet. Donec eu leo quis orci laoreet rutrum ac quis
              nulla. Ut sit amet metus a nulla consectetur faucibus.
            </p>
          </Col>
        </Row>
        <Row>
          <center>
            <Col>
              <button className={classes.button}>See all our brands</button>
            </Col>
          </center>
        </Row>
      </Container>
      <Container>
        <Row>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Row>
        <Row>
          <Col>
            <h5 className={classes.title}>MATTIS LORETT</h5>
            <p className={classes.text}>
              Phasellus vitae blandit elit. Quisque viverra lacus ac metus
              ornare luctus. Praesent non nunc ornare, tempus erat at, maximus
              est. Pellentesque pretium rhoncus.
            </p>
            <div className={classes.txt}>
              <p>
                Vestibulum sollicitudin ex et justo suscipit luctus. Cras
                faucibus euismod lorem, quis sodales lacus commodo vitae.
                Pellentesque ornare nulla eu risus.
              </p>
              <p>
                Phasellus vitae blandit elit. Quisque viverra lacus ac metus
                ornare luctus. Praesent non nunc ornare, tempus erat at, maximus
                est. Pellentesque ornare nulla eu. Vestibulum sollicitudin ex et
                justo suscipit luctus. Cras faucibus euismod lorem, quis sodales
                lacus commodo vitae.
              </p>
            </div>
          </Col>
          <Col>
            <h5 className={classes.title}>FROGIAT PRODIENT</h5>
            <p className={classes.text}>
              Phasellus vitae blandit elit. Quisque viverra lacus ac metus
              ornare luctus. Praesent non nunc ornare, tempus erat at, maximus
              est. Pellentesque pretium rhoncus.
            </p>
            <p className={classes.txt}>
              Vestibulum sollicitudin ex et justo suscipit luctus. Cras faucibus
              euismod lorem, quis sodales lacus commodo vitae. Pellentesque
              ornare nulla eu risus. Phasellus vitae blandit elit. Quisque
              viverra lacus ac metus ornare luctus. Praesent non nunc ornare,
              tempus erat at, maximus est. Pellentesque ornare nulla eu.
              Vestibulum sollicitudin ex et justo suscipit luctus. Cras faucibus
              euismod lorem, quis sodales lacus commodo vitae. quis sodales
              lacus commodo vitae. Pellentesque ornare nulla eu risus. Phasellus
              vitae blandit elit. Quisque viverra lacus ac metus ornare luctus.
              Praesent non nunc ornare, tempus erat at, maximus est.
            </p>
          </Col>
          <Col>
            <div className={classes.box}>
              <h5>DOLOR LACUS</h5>
              <hr />
              <span>
                <BsCheckLg /> Senspendis sollicitudin exy.
              </span>
              <br />
              <span>
                <AiFillStar /> Quisme lorem tortr fuig sem.
              </span>
              <br />
              <span>
                <BsFillLightbulbFill /> Quisme curus bolig fuig sem.
              </span>
              <br />
              <span>
                <BsCheckLg /> Nulla sollicitudin ex.
              </span>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
      <div className={classes.numbers}>
        <Container>
          <Row>
            <Col>
              <h5 className={classes.title}>IN NUMBERS</h5>
              <br />
              <p className={classes.numbertext}>
                Pellentesque ornare nulla eu. Vestibulum sollicitudin ex et
                justo suscipit luctus. Cras faucibus euismod lorem, quis sodales
                lacus commodo vitae. quis sodales lacus commodo vitae gty fili
                teadt sollicitudin ex et justo suscipit luctus.
              </p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <span className={classes.num}>43</span>
                  <br />
                  <span className={classes.n}>RONCUS</span>
                </Col>
                <Col>
                  <span className={classes.num}>118</span>
                  <br />
                  <span className={classes.n}>NUN SED</span>
                </Col>
                <Col>
                  <span className={classes.num}>96</span>
                  <br />
                  <span className={classes.n}>SAPIEN</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default Home;
