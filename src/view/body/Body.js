import React, { Component } from 'react';
import { connect } from 'react-redux'
import Menu from './menu/Menu';
import Content from './content/Content';
import './body.css';
class Body extends React.Component {
    
        // static propTypes = {//类的静态属性
        //     initialValue: React.PropTypes.string
        // };
    
        // static defaultProps = {//类的静态属性
        //     initialValue: ''
        // };
        
        constructor(props) {
            super(props);
    
            // 设置 initial state
            this.state = {
                text: props.initialValue || 'placeholder',
                isLoading: false
            };
    
            
    
            // ES6 类中函数必须手动绑定
            //this.handleChange = this.handleChange.bind(this);//构造函数中绑定
        }
    
        handleChange(event) {
            this.setState({
                text: event.target.value
            });
        }
    
        render() {
            return (
                <div className="Body">
                    <Menu/>
                    <Content/>
                </div>
            );
        }
    }
    
    export default Body;
    
    // Head.propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // Head.defaultProps = {
    //     initialValue: ''
    // };
    
    