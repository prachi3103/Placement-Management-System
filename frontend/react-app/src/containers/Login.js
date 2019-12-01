import React from 'react';
import '../css/login.css';
import { Form, Icon, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect }from 'react-redux';
import * as actions from '../store/actions/auth';
const FormItem = Form.Item;

const antIcon = <Icon type="loading" style={{ fontSize: 24}} spin />;

class NormalLoginForm extends React.Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            this.props.onAuth(values.username, values.password);

            this.props.history.push('/student');
           //console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }
    
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="body">
       
           <head>
            <meta charset="utf-8" />
            <title>Login</title>
            <link rel="stylesheet" type="text/css" href="../css/login.css" />
            </head>
            
            <div className="login-box">
                <h1>Login Here</h1>

            {errorMessage}
            {

                this.props.loading ?

                <Spin indicator={antIcon} />

                :

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <label for="username">Username</label>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="text"
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                        <label for="password">Password</label>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />
                    )}
                    </Form.Item>

                    <Form.Item>
                        <div className="down">
                        <Button type ="danger" htmlType="submit">
                            Log In!
                        </Button>
                        <br />
                        <br />
                        <div className="a">
                        or
                        <NavLink 

                            to='/signup/'> SignUp
                        </NavLink>
                        </div>
                        </div>

                    </Form.Item>
                </Form>
                
            }
            </div>
        
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create('normal_login')(NormalLoginForm);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);