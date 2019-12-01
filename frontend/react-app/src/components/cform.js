import React from 'react';
import axios from 'axios';
import "../css/comment.css";
class CommentForm extends React.Component{
    handleFormSubmit = (event,requestType) => {
        const sname = event.target.elements.sname.value;
        const content = event.target.elements.content.value;
        

        
        switch (requestType) {
            case "post":
                return axios
                 .post("http://127.0.0.1:8000/apic/" , {
                     sname:sname,
                   
                     content:content,
                    
                     
                 })
                 .then(res => console.log(res))
                 .catch(error => console.error(error));

                 this.props.history.push('/')

            case "put":
                return axios
                 .put(`http://127.0.0.1:8000/apic/commentID/` , {
                     sname:sname,
                    
                     content:content,
                     

                    
                 })
                 .then(res => console.log(res))
                 .catch(error => console.error(error));

        }
    };

    render() {
        return(
            <div className="f">
    <form onSubmit={(event) => {this.handleFormSubmit(event, this.props.requestType)} }>
<label for="sname"><h5>Student's Name:  </h5></label>
<br />
 <input type="text" name="sname"  />
 <br />
<label for="content"><h5>Doubt:  </h5></label>
<br />
<input type="text" name="content" />
<br />
<br />
<button type="submit">{this.props.btnText}</button>
</form>
            </div>

        );
    }
}

export default CommentForm;