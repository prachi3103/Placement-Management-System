import { List} from "antd";
import React from 'react';
import "../css/comment.css"

  const Comments = props => {
    return (
      <div className="h">
      <h2>DOUBTS SECTION</h2>
      <List
        dataSource={props.data}
        renderItem={item => (
          
          <List.Item>
            <div className="display">
           <h6><b> Student's Name:</b>{item.sname}</h6><br />
           
            
            <h6><b>Doubt:</b>{item.content}</h6><br />
            <hr />
            </div>
          </List.Item>
        )}
      />
     
         
      </div>
    );
  };
  
  export default Comments;

/*class CommentForm extends React.Component{
    handleFormSubmit = (event,requestType) => {
        const sname = event.target.elements.sname.value;
        const content = event.target.elements.content.value;
        const tname = event.target.elements.tname.value;
        const reply = event.target.elements.reply.value;

        switch (requestType) {
            case "post":
                return axios
                 .post("http://127.0.0.1:8000/apic/" , {
                     sname:sname,
                     content:content,
                     tname:tname,
                     reply:reply
                 })
                 .then(res => console.log(res))
                 .catch(error => console.error(error));

                 this.props.history.push('/')

            case "put":
                return axios
                 .put(`http://127.0.0.1:8000/apic/commentID/` , {
                     sname:sname,
                     content:content,
                     tname:tname,
                     reply:reply
                 })
                 .then(res => console.log(res))
                 .catch(error => console.error(error));

        }
    };

    render() {
        return(
            <div>
                form onSubmit={(event) => {this.handleFormSubmit(event, this.props.requestType)} }>
<label for="sname">Student Name</label>
<br />
 <input type="text" name="sname" placeholder=" Your name.." />
 <br />
<label for="content">Doubt</label>
<br />
<input type="text" name="content" placeholder=" Your Doubt.." />
<br />
<label for="tname">Teacher's Name</label>
<br />
<input type="text" name="tname" placeholder="Teacher's Name" />
<br />
<label for="reply">Reply</label>
<br />
<input type="text" name="reply" placeholder=" Your Reply.." />
<br />
<button type="submit">{this.props.btnText}</button>
            </div>

        );
    }
}

export default CommentForm;
*/   