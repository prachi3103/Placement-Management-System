import React from 'react';
import axios from 'axios';
import CommentForm from "../components/cform";
import Comments from "../components/Comment";
import ReplyList from "../containers/replydetail";
import "../css/comment.css";
class CommentList extends React.Component {
    state = {
        comments: []
        
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/apic/')
        
        .then(res => {
            this.setState({
                comments: res.data
            
            });
            
        });

    }
    

    render() {
        return (
            <div className="p">
            <Comments data={this.state.comments} /> <br/>
            <h2>DOUBTS</h2>
            <CommentForm requestType="post" commentID={null}
            btnText="CREATE" />
            <br />
            <ReplyList />

            
            </div>
        );
    }
}



export default CommentList;