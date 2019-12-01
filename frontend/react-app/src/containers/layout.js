import React from 'react';
//import '../css/home.css';
import { Layout, Menu} from "antd";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
//import '../css/home.css';

const { Header, Footer, Content } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
    
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            
          {
            this.props.isAuthenticated ?
            
            <Menu.Item key="5" onClick={this.props.logout}>
              <Link to ="/home">Logout</Link>
            </Menu.Item>

            :

            <Menu.Item key="5">
            <Link to ="/login">Login</Link></Menu.Item>
          }
        
            <Menu.Item key="4">
              <Link to ="/home">Home</Link></Menu.Item>
            <Menu.Item key="3">
              <Link to ="/companies">Companies</Link></Menu.Item>
            <Menu.Item key="2">
              <Link to ="/comment">Doubts Section</Link></Menu.Item>
             
          </Menu>
        
         
        </Header>
        <Content>
          <div>
                        {this.props.children}
                        </div>
                        </Content> 
  
        

  
                
        
        <Footer style={{ textAlign: "center" }}>
          @copyright 2019
        </Footer>
      </Layout>
    
  );
}
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

/*
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />

   
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
   </head>
    <title>React App</title>
    <noscript>You need to enable JavaScript to run this app.</noscript>

        <div className="topnav">
          <a href="#contact">Companies</a>
          <a href="#contact">Online traning offers</a>
          <a href="#about">About</a>
          <button className="btn1"><i className="fa fa-login"></i> LOGIN</button>
          <button className="btn2"><i className="fa fa-register"></i> REGISTER</button>
        </div>

        <div className="w3-content w3-section" style={{maxWidth:'1000px'}}>
          <div className="container">
            <img
              className="mySlides"
              src={require('../img/adult-architect-blueprint-416405.jpg')}
              style={{width:'100%'}}
            />
            <div className="content">
              <p>
                Go Ahead. Get your Dream job and Internships!
              </p>
            </div>

            <button className="btn">Get Started</button>
            <img
              className="mySlides"
              src={require('../img/business-deal-collaboration-colleagues-1483933.jpg')}
              style={{width:'100%'}}
            />
            <div className="content">
              <p>
                Go Ahead. Get your Dream job and Internships!
              </p>
            </div>

            <button className="btn">Get Started</button>
            <img
              className="mySlides"
              src={require('../img/advice-advise-advisor-7096.jpg')}
              style={{width:'100%'}}
            />
            <div className="content">
              <p>
                Go Ahead. Get your Dream job and Internships!
              </p>
            </div>

            <button className="btn">Get Started</button>
          </div>
        </div>
        <script src ="../js/home.js" type="text/js">
        
        </script>
        </html>


*/