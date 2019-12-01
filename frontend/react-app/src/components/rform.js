import React from 'react';
import axios from 'axios';
import "../css/comment.css";
class ReplyForm extends React.Component{
    handleFormSubmit = (event,requestType) => {
        const tname = event.target.elements.tname.value;
        const body = event.target.elements.body.value;
        const to = event.target.elements.to.value;
        switch (requestType) {
            case "post":
                return axios
                 .post("http://127.0.0.1:8000/apir/" , {
                     tname:tname,
                     body:body,
                     to:to,
                     
                 })
                 .then(res => console.log(res))
                 .catch(error => console.error(error));

                 this.props.history.push('/')

            case "put":
                return axios
                 .put(`http://127.0.0.1:8000/apir/replyID/` , {
                     tname:tname,
                     body:body,
                     to:to,
                    
                 })
                 .then(res => console.log(res))
                 .catch(error => console.error(error));

        }
    };

    render() {
        return(
            <div className="f">
    <form onSubmit={(event) => {this.handleFormSubmit(event, this.props.requestType)} }>
    <label for="to">Reply To</label>
<br />
 <input type="text" name="to"  />
 <br />
<label for="tname">Teacher's Name</label>
<br />
 <input type="text" name="tname"  />
 <br />
<label for="body">Reply</label>
<br />
<input type="text" name="body"  />
<br />
<br />
<button type="submit">{this.props.btnText}</button>
</form>
            </div>

        );
    }
}

export default ReplyForm;