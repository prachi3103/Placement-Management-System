import { List } from "antd";
import React from 'react';
import "../css/comment.css";
const Replies = props => {
    return (
      <div className="h">
       <h2>REPLY SECTION</h2>
      
         
      <List
       dataSource={props.data}
       renderItem={item => (
         
          <List.Item>
            <div className="display">
            
           <h6><b>Reply To:</b>{item.to}</h6>
           <br />
           
          <h6><b>Teacher's Name:</b>{item.tname}</h6>
          <br/>
            <h6><b>Reply:</b>{item.body}</h6>
            <br />
            <hr />
            </div>
          </List.Item>
         
        )}
      />
      </div>
    );
  };
  
  export default Replies;