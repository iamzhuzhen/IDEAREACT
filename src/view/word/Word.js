import React, { Component } from 'react';

import './word.css';
class Word extends React.Component {
    
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
                <div className="Word">
                    Word
                </div>
            );
        }
    }
    export default Word;
    
    // Head.propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // Head.defaultProps = {
    //     initialValue: ''
    // };
    
    