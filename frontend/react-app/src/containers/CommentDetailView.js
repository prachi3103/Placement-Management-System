import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {Card} from 'antd';
import CommentForm from '../components/cform';
class CommentDetail extends React.Component{
    state = {
        comment: {}
    }

    componentDidMount() {
        const commentID = this.props.match.params.commentID;
        axios.get(`http://127.0.0.1:8000/apic/${commentID}`)
         .then(res => {
             this.setState({
                 comment : res.data
             });
        
         });
    }



render() {
    return (
        <div>
        <Card sname={this.state.comment.sname}>
            <p> {this.state.comment.content} </p>
            
        </Card>
    
        </div>

    )
}
}

export default CommentDetail;