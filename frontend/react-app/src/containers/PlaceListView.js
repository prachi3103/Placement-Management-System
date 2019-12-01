import React from "react";
//import axios from "axios";
//import Places from "../components/Place";
//import CustomForm from "../components/Form";
import '../css/infosys.css';
//import 'bootstrap/dist/css/bootstrap.css';


class PlaceList extends React.Component {
  state = {
    places: []
  };
    render() {
    return (
      <div>
        <div className="bodyin">
        <head>
	<title>INFOSYS</title>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" type="text/css" href="infosys.css" media="screen"/>
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
	rel="stylesheet"/>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	
</head>
  <div className="container">
   <img src={require('../img/logo.jpg')} style={{width: '100%'}} ></img>
   <div className="top-left"><b><font color="green"><font size="40">Infosys</font></font></b></div>
    <div className="bottom-left"><h2><b><font color="white">Information Sustainability Report 2018-19</font></b></h2><a className="btn btn-primary view-pdf" href="infosys-sustainability-report-2018-19 (1).pdf">Read More</a>
    </div>
   </div>
  <div className="container">
   <img src={require('../img/sunflower.jpg')} style={{width: '100%' }} ></img>
   <div className="top-left"><b><font color="yellow"><font size="60">Digital Core Capabilities</font></font></b></div>
   <h2><a className="btn btn-primary view-pdf" href="https://www.infosys.com/navigate-your-next/digital-capabilities/Pages/index.aspx">Explore</a></h2>
   </div>
  
   
   <div className="container">
   <img src={require('../img/purple_background.jpg')} style={{width: '100%'}} /> 
      <div className="top-left"><b><font color="white"><font size="60"><i><p align="left">Empowering Talent Transformations</p><p>Improving productivity with digital field workforce management</p></i></font></font></b></div>
      <div className="bottom-left">Developing talent for our digital future</div>
   <h2><a className="btn btn-primary view-pdf" href="https://www.infosys.com/navigate-your-next/talent-transformations/Pages/index.aspx">Explore</a></h2>
    </div>

   
   <div className="container">
  <h2>AT INFOSYS</h2>
  <div id="myCarousel" className="Carousel-slide" data-ride="carousel">
  
    <ol className="Carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="Active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

  
    <div className="Carousel-inner">

      <div className="Item-active">
        <img src={require('../img/insight.jpg')} alt="Insight" width="1325" height="150" style={{width: '100%'}} />
        <div className="Carousel-caption">
          <h1><b>Insight</b></h1>
        </div>
      </div>

      <div className="Item-active">
        <img src={require('../img/experience.jpg')} alt="Experience" width="1325" height="300"  style={{width: '100%'}} />
        <div className="Carousel-caption">
          <h1 style={{color:'blue'}}>Experience</h1>
        </div>
      </div>
    
      <div className="item">
        <img src={require('../img/Innovate.jpg')} alt="Innovate" width="1325" height="300"  style={{width: '100%' }} />
        <div className="Carousel-caption">
          <h1 style={{color:'blue'}}>Innovate</h1>
        </div>
      </div>
  
    </div>

  
    <a className="Left-carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon-glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="Right-carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon-glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>
  </div>
</div>

    );
  }
}


export default PlaceList;
  
  /*
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        places: res.data
      });
    });
  } 
  */