import React from 'react';
import '../css/companies.css'

class Companies extends React.Component {
	
    render() {
      return (
          <div className="bodyc">
              
  <div className="head">
<h2><b>SUPER DREAM COMPANIES</b></h2></div>
<br />


<div className="row">
  <div className="column">
    <div className="card">
      <img src={require('../img/google.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Google</h2>
        <p className="title">Good knowledge in Internet, web-search, online advertising, numerical analysis, fraud detection, and e-commerce.</p>  
        <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={require('../img/amazon.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Amazon</h2>
        <p className="title">Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention.</p>
   <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
    <img src={require('../img/fb.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Facebook</h2>
        <p className="title">some tips and tricks to get noticed by recruiters at facebook for a technical or non-technical role.Its mission is to bring the world together</p> 
   <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>



  <div className="column">
    <div className="card">
    <img src={require('../img/microsoft.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Microsoft</h2>
        <p className="title">At Microsoft our mission and values are to help people and businesses throughout the world realize their full potential.
</p>  
   <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>
  </div>
  <br />

  <hr />
  <div className="head">
  <h2><b>DREAM COMPANIES</b></h2></div>
  <br />

  <div className="row">
  <div className="column">
    <div className="card">
    <img src={require('../img/jp.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>J.P.Morgan</h2>
        <p className="title">JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company.</p>
       
         <p><a href="http://localhost:3000/jpm"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>
  


  <div className="column">
    <div className="card">
    <img src={require('../img/morgan.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Morgan Stanley</h2>
        <p className="title">Talented, intelligent and passionate people have made Morgan Stanley the firm it is,a real difference in the world.</p>
         <p><a href="http://localhost:3000/ms"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>


  
  <div className="column">
    <div className="card">
    <img src={require('../img/qua.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Quantiphi</h2>
        <p className="title">Quantiphi is a category defining Machine Learning and Artificial Intelligence software and services company.</p>
         <p><a href="http://localhost:3000/quantiphi"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>


  
  <div className="column">
    <div className="card">
      <img src={require('../img/intel.jpg')} alt="Jane" style={{width:'100px'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Intel</h2>
        <p className="title">Get to know Intel in this company overview that explores technology innovations, executive bios, open positions, and links to social media.</p>
        <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>
  </div>
  <br />
  <hr />
  <div className="head">
  <h2><b>NORMAL COMPANIES</b></h2></div>
<br />

  <div className="row">
  <div className="column">
    <div className="card">
    <img src={require('../img/img1.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Infosys</h2>
        <p className="title">Infosys Limited is an Indian multinational corporation that provides business consulting, IT and outsourcing services.</p>
         <p><button className="button">Know more</button></p>
      </div>
    </div>
  </div>


  <div className="column">
    <div className="card">
    <img src={require('../img/tcs.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>TCS</h2>
        <p className="title">Tata Consultancy Services Limited is an Indian multinational information technology service and consulting company.</p>
         <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>


  
  <div className="column">
    <div className="card">
    <img src={require('../img/wipro.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Wipro</h2>
        <p className="title">Wipro Limited is an Indian multinational corporation that provides IT, consulting and business process services.</p>
         <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>
  

  
  <div className="column">
    <div className="card">
    <img src={require('../img/acc.jpg')} alt="Jane" style={{width:'100%'}} style={{height:'175px'}} />
      <div className="container">
        <h2>Accenture</h2>
        <p className="title">Accenture plc is a multinational professional services company that provides services in strategy, consulting, digital and operations.</p>
         <p><a href="#"><button className="button">Know more</button></a></p>
      </div>
    </div>
  </div>
</div>


          </div>
      );
    }
}
export default Companies;