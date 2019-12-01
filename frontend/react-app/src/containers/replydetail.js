
import React from 'react';
import axios from 'axios';
import ReplyForm from "../components/rform";
import Replies from "../components/Reply";
import "../css/comment.css";

class ReplyList extends React.Component{
    state = {
      
        replies: []
    }
    componentDidMount() {
        
        axios.get('http://127.0.0.1:8000/apir/')
        .then(res => {
            this.setState({
                replies: res.data
            });
            
        });

    }
    render() {
        return (
            <div className="p">
            <Replies data={this.state.replies} /> <br/>
            <h2>REPLY</h2>
            <ReplyForm requestType="post" replyID={null}
            btnText="CREATE" />
            </div>
        );
    }
    
}

export default ReplyList;