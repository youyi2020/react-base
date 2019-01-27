import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './index.less'
import {regExp,stringToBase64,base64ToString} from './../../util'
import {authLogin} from './../../api/index.js'
import {message} from 'antd';
import {connect} from 'react-redux'
import {userToken} from "./../../redux/action";

class Login extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                authLogin(values).then(result => {
                    message.success('登录成功');
                    // const token = JSON.stringify(result);
                    // const tokenBase = stringToBase64(token)
                    // console.log(tokenBase);
                    this.props.dispatch(userToken(result));
                    this.props.history.push('/home');
                })
            }
        });
    }

    handleRegister = (e) => {
        e.preventDefault();
        this.props.history.push('/register');
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="auth-login">
                <div className="login">  
                    <p className="login-title">会话精灵后台管理系统</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item> 
                            {getFieldDecorator('userAccount', {
                                rules: [ 
                                    { required: true, message: '手机号不能为空' },
                                    { whitespace: false, message: '不允许使用空格' },
                                    { pattern: regExp.isPhone, message: '请输入正确的手机号' }
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} allowClear={true} placeholder="请输入手机号" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userPassword', {
                                rules: [
                                    { required: true, message: '密码不能为空' },
                                    { whitespace: false, message: '不允许使用空格' },
                                    { pattern: regExp.hasLetter, message: '密码需包括字母和数字' },
                                    { min: 6, message: '密码长度在6-20字符之间' },
                                    { max: 20, message: '密码长度在6-20字符之间' },
                                ],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} allowClear={true} type="password" placeholder="请输入密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userRemember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot">忘记密码？</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <div className="login-registe">
                                <span>没有账号？</span>
                                <a onClick={this.handleRegister}>立即注册</a>
                            </div>
                            
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect()(WrappedNormalLoginForm)