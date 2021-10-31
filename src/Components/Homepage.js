import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/mohanbabu1.jpg"
                alt="Ismail"
              />
            </div>
            <div className="banner-text">
              <h1>Javascript Full Stack Developer</h1>
              <hr />
              <p>
                HTML | CSS | BOOTSTRAP | ReactJS | MYSQL | NodeJS/ExpressJS | MongoDB
              </p>
              <div className="social-links">
                                          
                <a
                  href="https://github.com/Mohanenfield?tab=repositories"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              
                <a
                  href="https://www.linkedin.com/in/mohanbabu-r-539ba5201/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                <a
                  href="https://www.naukri.com/mnjuser/homepage"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-address-card"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
