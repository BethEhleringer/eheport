import React, { Component } from "react";
import { Col, Row, Container } from "./Grid";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Blogx from "./pages/Blogx";
import Work from "./pages/Work";
import Coding from "./pages/Coding";
import Coding2 from "./pages/Coding2";



class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else if (this.state.currentPage === "Blogx") {
      return <Blogx />;
    } else if (this.state.currentPage === "Coding") {
      return <Coding />;
    } else if (this.state.currentPage === "Coding2") {
      return <Coding2 />;
    } else {
      return <Work />;
    }
  };

  render() {
    return (
      <Container>
      <Row>
        <Col size="xs-0 sm-1 md-2 lg-3"></Col>
        <Col size="xs-12 sm-10 md-8 lg-6">
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
      </Col>
      <Col size="xs-0 sm-1 md-2 lg-3"></Col>

      </Row></Container>
    );
  }
}

export default Portfolio;
