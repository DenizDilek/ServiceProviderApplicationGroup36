// import React, { Component } from 'react'
// import classNames from "classnames";
// import { makeStyles } from "@material-ui/core/styles";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Header from 'components/Header/Header'
// import styles from "assets/jss/material-kit-react/views/landingPage.js";
// const dashboardRoutes = [];
// const useStyles = makeStyles(styles);

// export default class home extends Component {
//     render() {
//         const classes = useStyles();
        
//         return (
//             <Header
//             color="transparent"
//             routes={dashboardRoutes}
//             brand="Material Kit React"
//             rightLinks={<HeaderLinks />}
//             fixed
//             changeColorOnScroll={{
//             height: 400,
//             color: "white"
//             }}
//       />
//         )
//     }
// }
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Service Provider Application"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/AdobeStock_117891139-1024x680.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Find the perfect service for your work</h1>
              <h4>
                We're providing you a platform to satisfy your immediate service needs with our service providing app.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
    </div>
  );
}
