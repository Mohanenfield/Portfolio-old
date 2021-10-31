import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/mohanbabu.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>MOHANBABU R</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This is MOHANBABU R. I am an Effective and Quick learner expecting an oppurtunity to showcase my talent.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Avadi,Chennai-600054</p>
            <h5>Phone</h5>
            <p>+91 6380130927</p>
            <h5>Email</h5>
            <p>mohanenfield2134@gmail.com</p>
            <h5>Github</h5>
            
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://github.com/Mohanenfield?tab=repositories"
            >
              Github Account Link
            </a>
            <p>
            <h5>Resume</h5>
            <a 
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/file/d/1CN27739StMUNZRujYn4FPh1vb0hewAvG/view?usp=sharing"><button>
            Download Resume</button>
            </a></p>
    
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName={"Saveetha Engineering College"}
              degreeName={"BE in Mechanical Engineering"}
              present={2021}
              
              institute={"Guvi Geeks"}
              course={"Full Stack Developement"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"May 2021"}
              endYear={"Present"}
              jobName={"Trainee"}
              jobDesc={
                "That was a Full Stack Developement Course. And I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through this course Training."
              }
            />
            <Experience
              startYear={"August 2019"}
              endYear={"March 2021"}
              jobName={"Junior Production Engineer"}
              jobDesc={"Handling the team and achieving large productions"}
            />
            <Experience
              startYear={"July 2018"}
              endYear={"July 2019"}
              jobName={"Graduate Engineer Trainee"}
              jobDesc={
                "Role is to inspect the assembled parts and incharge of the assembly line "
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={80} />
            <Skills skill={"NodeJS"} progress={70} />
            <Skills skill={"MongoDB"} progress={80} />
            <Skills skill={"MySQL"} progress={70} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>Participated in Guinness World Record of AI event conducted by GUVI.</h6>
            <h6></h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
