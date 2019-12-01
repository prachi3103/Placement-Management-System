import React from 'react';
import '../css/home.css';
class Home extends React.Component {
  render() {
return (
  <div className="bodyh">
      
      <div className="container1">
       
          <div className="details">
    <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="../css/home.css" />
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
   <div className="outer">
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
          <a href="http://localhost:3000/companies">
            <button className="btn">Look For Your Dream Company</button>
           </a>
          </div>
        </div>
        </div>

    <script src ="../js/h.js" type="text/babel">
     
     </script>
  </div>
  </div>
  </div>
  

);
}
}
export default Home;
/*var index = 0 ;
                carousel();

                function carousel() {
                  var i;
                  var x = document.getElementsByClassName("mySlides");
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                  }
                  index++;
                  if (index > x.length) {
                    index = 1;
                  }
                  else{
                  x[index - 1].style.display = "block";
                  setTimeout(carousel, 3000);
                  } // Change image every 2 seconds
                }
              
) {

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
  */