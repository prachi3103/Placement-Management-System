import React from 'react';
import '../css/ms.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
class MS extends React.Component {
    render() {
      return (
        <div className="bodym">
			<h6>.</h6>
	<div className="container">
		<div className="services">
			<h1><font color="white">About Us</font></h1>
		</div>
		<div className="para">
			<h2><font color="white">We believe capital can work to 
benefit all of society</font></h2>
<li>We make this belief a reality by putting clients first, leading with exceptional ideas, doing the right thing, and giving back.</li>
<h2><font color="white">Giving back is our 
global commitment</font></h2>
<li>Building a better world means giving back and growing together.</li>
<h2><font color="white">We help our clients build a 
sustainable future</font></h2>
<li>Mobilizing capital to deliver sustainable growth and long-term value.</li>
<h2><font color="white">Our people are our 
strongest asset</font></h2>
<li>We know that the talent and points of view of diverse individuals built our legacy and shapes our future.</li>
<h2><font color="white">Global presence 
is key to our clients' success</font></h2>
<li>Our international offices allow us to monitor markets and make a difference around the world.</li>
</div>
</div>
<div className="container">
		<div className="services">
			<h1><font color="white">What We Do</font></h1>
		</div>
		<div className="row">
			<div className="col-md-3 text-center">

				<div className="icon">
					<i className="fa fa-ambulance"></i>
				</div>
				<h3><font color="white">Wealth Management</font></h3>
				<p>You have meaningful goals. Our Financial Advisors can help you reach them. For over 80 years, we have worked with individuals, families, businesses and institutions—to deliver services and solutions that help build, preserve and manage wealth.</p>
			</div>
			<div className="col-md-3 text-center">

				<div className="icon">
					<i className="fa fa-credit-card"></i>
				</div>
				<h3><font color="white">Investment Banking and Capital Markets</font></h3>
				<p>Corporations, organizations and governments around the world rely on Morgan Stanley’s reputation as a global leader in investment banking. Our advisory and capital-raising services are recognized as among the best in the industry.</p>
			</div>
			<div className="col-md-3 text-center">

				<div className="icon">
					<i className="fa fa-mobile"></i>
				</div>
				<h3><font color="white">Sales & Trading</font></h3>
				<p>Global institutions. Cutting-edge hedge funds. Industry innovators—all turn to Morgan Stanley for sales, trading and market-making services, as we work to find new forms of investment to generate superior returns.</p>
			</div>
			<div className="col-md-3 text-center">

				<div className="icon">
					<i className="fa fa-search"></i>
				</div>
				<h3><font color="white">Research</font></h3>
				<p>Timely, in-depth analysis of companies, industries, markets and world economies has earned Morgan Stanley’s reputation as a leader in the field of investment research.</p>
			</div>
			</div>
            </div>
          </div>
      )
    }
};

export default MS;