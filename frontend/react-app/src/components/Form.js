import React from "react";
import '../css/studentdetail.css';
import axios from "axios";

class CustomForm extends React.Component {
  handleFormSubmit = (event,requestType) => {
    
    const name = event.target.elements.name.value;
    const sapid = event.target.elements.sapid.value;
    const emailid = event.target.elements.emailid.value;
    const department = event.target.elements.department.value;
    const year = event.target.elements.year.value;
    const contactno = event.target.elements.contactno.value;

    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            name:name,
            sapid:sapid,
            emailid:emailid,
            department:department,
            year:year,
            contactno:contactno
            
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
          this.props.history.push('/');
 
    }
  };
  
  render() {
    return (
      <div className="bstudent">
        <h6>r</h6>
        <div className="aa">
        <div className="heading">Student Details Form</div>
        <br />
<form onSubmit={(event) => {this.handleFormSubmit(event, this.props.requestType)} }>
<label for="name">Full Name</label>
<br />
 <input type="text" name="name" placeholder=" Your name.." />
 <br />
<label for="sapid">SapId</label>
<br />
<input type="text"  name="sapid" placeholder=" Your SapId.." />
<br />
<label for="emailid">EmailId</label>
<br />
<input type="email" name="emailid" placeholder=" Your EmailId.." />
<br />
<label for="department">Department</label>
<br />
<input type="text" name="department" placeholder=" Your Department.." />
<br />
<label for="year">Academic Year</label>
<br />
<input type="text"  name="year" placeholder=" Your Academic Year.." />  
<br />
<label for="contactno">Contact No</label>
<br />
<input type="text" name="contactno" placeholder=" Your Contact No.." />
<br />
<br />
<div className="btn">

<button type="submit"><a href="http://127.0.0.1:8000/quiz/">{this.props.btnText}</a></button></div>
</form>
       </div>
      </div>
    );
  }
}

export default CustomForm;
