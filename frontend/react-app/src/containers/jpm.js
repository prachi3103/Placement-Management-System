import React from 'react';
import '../css/jpm.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
class JPM extends React.Component {
	
    render() {
      return (
		
          <div className="bodyj">
			   <h6>b</h6>
			 <div >
	<div className="container">
		<div className="services">
			<h1><font color="white">About Us</font></h1>
		</div>
		<div className="para">
			JPMorgan Chase (NYSE: JPM) is one of the oldest financial institutions in the United States. With a history dating back over 200 years, here's where we stand today:

        <li>We are a leading global financial services firm with assets of $2.6 trillion.</li>
        <li>We have a presence in over 100 markets.</li>
        <li>We have over 250,000 employees.</li>
        <li>We serve millions of consumers, small businesses and many of the world's most prominent corporate, institutional and government clients.</li>
        <li>We are a leader in investment banking, financial services for consumers and small businesses, commercial banking, financial transaction processing and asset management.</li>
        <li>Our stock is a component of the Dow Jones Industrial Average.</li>
		</div>
	</div>
	<div className="container">
		<div className="services">
			<h1><font color="white">Our Services</font></h1>
		</div>
		<div className="row">
			<div className="col-md-3 text-center">

				<div className="jicon">
					<i className="fa fa-desktop"></i>
				</div>
				<h3><font color="white">Web Development</font></h3>
				<p>Web development is the work involved in developing a web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web-based internet applications, electronic businesses, and social network services.There are three kinds of web developer specialization: front-end developer, back-end developer, and full-stack developer.</p>
			</div>
			<div className="col-md-3 text-center">

				<div className="jicon">
					<i className="fa fa-tablet"></i>
				</div>
				<h3><font color="white">App Development</font></h3>
				<p>Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser.</p>
			</div>
			<div className="col-md-3 text-center">

				<div className="jicon">
					<i className="fa fa-line-chart"></i>
				</div>
				<h3><font color="white">Digital Marketing</font></h3>
				<p>Digital marketing is the marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium. Digital marketing channels are systems based on the internet that can create, accelerate, and transmit product value from producer to the terminal consumer by digital networks.</p>
			</div>
			<div className="col-md-3 text-center">

				<div className="jicon">
					<i className="fa fa-paint-brush"></i>
				</div>
				<h3><font color="white">Graphics Designing</font></h3>
				<p>Graphic design is the process of visual communication and problem-solving through the use of typography, photography, and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously. Graphic designers create and combine symbols, images and text to form visual representations of ideas and messages.</p>
			</div>
			</div>
			</div>
          </div>
	
          </div>
          
      );
    }
}

export default JPM;