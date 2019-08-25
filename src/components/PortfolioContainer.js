import React, { Component } from "react";
import { Col, Row, Container } from "./Grid";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

import Work from "./pages/Work";


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
    
    } else {
      return <Work />;
    }
  };

  render() {
    return (
      <Container>
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
      </Col>
      <Col size="md-1"></Col>
      </Row></Container>
    );
  }
}

export default Portfolio;
