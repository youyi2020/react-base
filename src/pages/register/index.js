import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './index.less'
import {regExp} from './../../util'
import {authRegister} from './../../api/index.js'
import {message} from 'antd';
import {connect} from 'react-redux'

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {

                let params = {
                    userAccount :  values.userAccount,
                    userPassword : values.userPasswordOne
                }
                authRegister(params).then(result => {
                    message.success('注册成功');
                    this.props.history.push('/login');
                })
            }
        });
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/login');
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('userPasswordOne')) {
          callback('两次输入密码须一致');
        } else {
          callback();
        }
    }

    handleAgreement = (e) => {
        e.preventDefault();
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="auth-register">
                <div className="register">  
                    <p className="register-title">会话精灵账号注册</p>
                    <Form onSubmit={this.handleSubmit} className="register-form">
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
                            {getFieldDecorator('userPasswordOne', {
                                rules: [
                                    { required: true, message: '密码不能为空' },
                                    { whitespace: false, message: '不允许使用空格' },
                                    { pattern: regExp.hasLetter, message: '密码需包括字母和数字' },
                                    { pattern: regExp.hasNumber, message: '密码需包括字母和数字' },
                                    { min: 6, message: '密码长度在6-20字符之间' },
                                    { max: 20, message: '密码长度在6-20字符之间' },
                                ],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} allowClear={true} type="password" placeholder="请输入密码" />
                            )}
                        </Form.Item>
                        <Form.Item style={{marginBottom:'10px'}}>
                            {getFieldDecorator('userPasswordTwo', {
                                rules: [
                                    { required: true, message: '密码不能为空' },
                                    { whitespace: false, message: '不允许使用空格' },
                                    { pattern: regExp.hasLetter, message: '密码需包括字母和数字' },
                                    { pattern: regExp.hasNumber, message: '密码需包括字母和数字' },
                                    { min: 6, message: '密码长度在6-20字符之间' },
                                    { max: 20, message: '密码长度在6-20字符之间' },
                                    { validator: this.compareToFirstPassword}
                                ],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} allowClear={true} type="password" placeholder="请再次输入密码" />
                            )}
                        </Form.Item>
                        <Form.Item style={{marginBottom:'10px'}}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>
                                    <span>同意</span>
                                    <a onClick={this.handleAgreement}>《XXX开发者协议》</a>
                                </Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="register-form-button">
                                注册
                            </Button>
                            <div className="register-registe">
                                <span>已有账号？</span>
                                <a onClick={this.handleLogin}>立即登录</a>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>


        )
    }
}

const WrappedNormalRegisterForm = Form.create({ name: 'normal_register' })(Register);

export default connect()(WrappedNormalRegisterForm)