import React from "react";
import TeamProfile from "../assets/TeamProfileGenerator.png";
import WeatherDashboard from "../assets/WeatherDashBoard.png";
import Employee from "../assets/TechBlog.png";
import GetRoutesProductTest from "../GetRoutesProductTest.png";
// import Proj2 from "../assets/proj2.avif";
// import Proj3 from "../assets/proj3.avif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

library.add(fab);

const Portfolio = (props) => {
  return (
    <Container className="Projects">
      <Row>
        <Col className="Title">
          <h3> Portfolio </h3>
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="12" md="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4">Team Profile</CardTitle>
              <a href="https://drive.google.com/file/d/1a9aIqdw6jlwDVTfykX16EG8nZt6aWsQ3/view">
                <CardImg
                  src={TeamProfile}
                  className="project-img"
                  alt="Team Profile"
                />
              </a>

              <p class="card-text">
                An command-line application that takes information about employees and generates a summary of each person.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button"> Inquirer</li>{" "}
                  <li class="tech-button"> Node.js</li>{" "}
                  <li class="tech-button"> HTML</li>{" "}
                  <li class="tech-button"> CSS</li>{" "}
                  <li class="tech-button"> VS Code</li>{" "}
                  <li class="tech-button"> Git Bash</li>{" "}
                  <li class="tech-button"> Github</li>{" "}
                </ul>
              </div>

              <CardText>
                <a
                  href="https://github.com/Tewol/13-ecommerce-orm"
                  class="repo-link"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} /> Team Profile
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4">Weather Dashboard</CardTitle>
              <a href="https://cinderbeast.github.io/server-side-APIs-Weather-Dashboard/">
                <CardImg
                  src={WeatherDashbord}
                  className="project-img"
                  alt="Weather Dashboard"
                />
              </a>

              <p class="card-text">
              An application that lets the user see the current weather and forecast for the next 5 days.
              </p>

              <div class="tech-used">
                <ul>
                <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button"> HTML</li>{" "}
                  <li class="tech-button"> CSS</li>{" "}
                  <li class="tech-button"> VS Code</li>{" "}
                </ul>
              </div>

              <CardText>
                <a
                  href="https://github.com/Tewol/13-ecommerce-orm"
                  class="repo-link"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} /> Ecommerce
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Workday Scheduler </CardTitle>
              <a href="https://cinderbeast.github.io/Third-Party-APIs-Workday-Scheduler/">
                <CardImg
                  src={WorkdayScheduler}
                  className="project-img"
                  alt="Workday Scheduler"
                />
              </a>

              <p class="card-text">
              An application that allows the user to see their appointments for the day color coding times by past, present, and future events.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript </li>{" "}
                  <li class="tech-button"> InquirerJs </li>{" "}
                  <li class="tech-button"> MySQL </li>{" "}
                  <li class="tech-button"> HTML</li>{" "}
                  <li class="tech-button"> CSS</li>{" "}
                  <li class="tech-button"> Third Party APIs</li>
                  <li class="tech-button"> VS Code</li>{" "}
                </ul>
              </div>

              <CardText>
                <a
                  href="https://github.com/Tewol/12-employee-tracker-mysql"
                  class="repo-link"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} /> Workday Scheduler</a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4">Tech Blog</CardTitle>
              <a href="https://blooming-shore-85267.herokuapp.com/">
                <CardImg
                  src={TechBlog}
                  className="project-img"
                  alt="Tech Blog"
                />
              </a>

              <p class="card-text">
              Application that allows developers to write about tech in CMS-style blog site.  User wil be able publish articles, blog posts, thoughts and opinions.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>
                  <li class="tech-button"> CSS</li>
                  <li class="tech-button"> Handlebars</li>
                  <li class="tech-button"> Heroku</li>{" "}
                  <li class="tech-button"> MySQL2</li>{" "}
                  <li class="tech-button"> Sequilize</li>{" "}
                  <li class="tech-button"> Heroku</li>{" "}
                  <li class="tech-button"> Express-Sessions</li>{" "}
                  <li class="tech-button"> Dotenv</li>{" "}
                  <li class="tech-button"> VS Code</li>{" "}
                </ul>
              </div>

              <CardText class="card-text">
                <a href="Add Link"class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Add Title
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Add Title </CardTitle>
              <a href="add link">
                <CardImg
                  src={Proj2}
                  className="project-img"
                  alt="Title"
                />
              </a>

              <p class="card-text">
                A railway web application that allow passengers to reserve a
                seat on one of many trains within Minnesota. passengers can see
                other passengers aboard as well as scheduled and current
                station.{" "}
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button"> MySQL</li>{" "}
                  <li class="tech-button"> Sequelize</li>{" "}
                  <li class="tech-button"> Handlebars</li>
                  <li class="tech-button"> Date-and-time</li>{" "}
                  <li class="tech-button"> Bootstrap</li>{" "}
                  <li class="tech-button"> Heroku</li>{" "}
                  <li class="tech-button"> Dotenv</li>
                  <li class="tech-button"> Express.js </li>
                  <li class="tech-button"> Git</li>{" "}
                </ul>
              </div>

              <CardText>
                <a
                  href="https://github.com/Tewol/Railway-Express"
                  class="repo-link"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} /> Railway Express
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="12" md="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Bark Avenue </CardTitle>
              <a href={Proj3}>
                <CardImg
                  src={Proj3}
                  className="project-img"
                  alt="Bark avenue home page"
                />
              </a>

              <p class="card-text">
                Bark Avenue is a website built for a pet hotel using Reactjs
                where a user can sign up, log in, set their pets name, check out
                the services offered, select a service, book a reservation, and
                add it to the cart.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button"> Reactjs</li>{" "}
                  <li class="tech-button"> MongoDB</li>{" "}
                  <li class="tech-button"> Redux</li>
                  <li class="tech-button"> React-Bootstrap</li>{" "}
                  <li class="tech-button"> Reactstrap</li>{" "}
                  <li class="tech-button"> Day-Picker</li>
                  <li class="tech-button"> emailjs</li>
                  <li class="tech-button"> Git</li>{" "}
                  <li class="tech-button"> Heroku</li>{" "}
                </ul>
              </div>

              <CardText tag="h6">
                <a href={Proj3} class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Bark Avenue
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;