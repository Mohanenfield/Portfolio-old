import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

   
  
    this.toggleCategories = () => {
      
       if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "White",
                  height: "180px",
                  background: "url(images/crud.png) center / cover",
                }}
              >
                CRUD Application
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a CRUD Application model done using ReactJS and MockAPI.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Mohanenfield/CRUD-UI" target="_blank"><Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                 
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                <a href="https://blissful-pare-106fa1.netlify.app/" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button></a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
           
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/Shoppingcart.png) center / cover",
                }}
              >
                Shopping Cart
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is a first REACT app i developed The noobie cart application
              </CardText>
              <CardActions border>
              <a href="https://github.com/Mohanenfield/Shopping-Cart" target="_blank"><Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                <a href="https://frosty-tereshkova-ebc6fc.netlify.app/" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button></a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
           
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/eCommerce.png) center / cover",
                }}
              >
                E-Commerce Website
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This eCommerce website is designed with ReactJS and still working on it.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Mohanenfield/inventory-app-fe" target="_blank"><Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                 
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                <a href="https://elastic-spence-2e9a80.netlify.app/" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button></a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/portfolio.png) center / cover",
                }}
              >
               Portfolio
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This Portfolio website is designed with ReactJS.
              </CardText>
              <CardActions border>
                <a href="https://github.com/Mohanenfield/PortFolio" target="_blank"><Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                 
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/mongo1.png) center / cover",
                }}
              >
                Database(Stu&Mentor)
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is an simple database for students and mentor like assingning mentor to student.
              </CardText>
              <CardActions border>
               <a href="https://github.com/Mohanenfield/mongoDb-task1" target="_blank"> <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                   >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                <a href="https://distracted-keller-eb19e8.netlify.app/" target="_blank"> <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button></a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/petshop.png) center / cover",
                }}
              >
               Database(Petshop)
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is basic database for a Petshop displaying the availability and other info.
              </CardText>
              <CardActions border>
              <a href="https://github.com/Mohanenfield/mongoDb-task2" target="_blank"><Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                <a href="https://jolly-curie-e64a08.netlify.app/" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button></a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            
          </div>
        );
      }
     else if (this.state.activeTab === 2) {
        return (
          <div>
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/CombinedTable.png) center / cover",
                }}
              >
                Classes for Students
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Simple database model for Student's Classes.
              </CardText>
              <CardActions border>
              <a href="https://github.com/Mohanenfield/sqltask-2" target="_blank"><Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button></a>
                <a href="https://agitated-neumann-f117d1.netlify.app/" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button></a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
      else if (this.state.activeTab === 3) {
        return (
          <div>
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "black",
                  height: "180px",
                  background: "url(images/shopping.png) center / cover",
                }}
              >
                Shopping Website
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Full stack web application using MERN Stack.
              </CardText>
              <CardActions border>
              <a href="https://github.com/Mohanenfield/capstone-project-fe" target="_blank"><Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github fe
                </Button></a>
                <a href="https://e-gadgets-app.netlify.app/" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo fe
                </Button></a>
               
              </CardActions>
              <CardActions border>
              <a href="https://github.com/Mohanenfield/capstone-project-be" target="_blank"><Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github be
                </Button></a>
                <a href="https://capstone-project-be.herokuapp.com/api/products" target="_blank"><Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo be
                </Button></a>
               
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } 
      else {
        return (
          <div>
            
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/facebook.jpg) center / cover",
                }}
              >
                Facebook
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This facebook developed on a semester for educational purpose
                only.
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  // onClick={this.facebook.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
         
          <Tab>React JS</Tab>
          <Tab>MongoDB</Tab>
          <Tab>MySQL</Tab>
          <Tab>Full Stack</Tab>
          
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
