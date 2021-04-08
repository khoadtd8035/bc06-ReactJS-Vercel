import React, { Component } from "react";
import Content from './Content'
import Contact from './Contact'
import ContentList from './ContentList'

class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <Content />
            <Contact />
        </div>
        
        <div className="row">
            <ContentList />
            <ContentList />
            <ContentList />            
        </div>
      </div>
    );
  }
}

export default MainContent;
