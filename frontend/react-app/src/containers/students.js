import React from 'react';
import axios from 'axios';
import '../css/studentdetail.css';
import CustomForm from '../components/Form';

class StudentList extends React.Component {
    state = {
        students :[]
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    students: res.data
                });
            })
    }
render(){
    return (
        <div>
          
        <CustomForm 
            requestType="post"
            studentID={null}
            
            btnText="Create" />
        </div>
    )
}    
}
export default StudentList;