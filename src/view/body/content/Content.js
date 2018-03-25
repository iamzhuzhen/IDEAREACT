import React, { Component } from 'react';
import './content.css';
import { Switch, Route } from 'react-router-dom';

import Scenario from '../.././scenario/Scenario';
import Audio from '../.././audio/Audio';
import Card from '../.././card/Card';
import Image from '../.././image/Image';
import Word from '../.././word/Word';

class Content extends React.Component {
    
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
                <div className="Content">
                   <Switch>
                        <Route exact path='/' component={Scenario}/>
                        <Route path='/word' component={Word}/>
                        <Route path='/image' component={Image}/>
                        <Route path='/card' component={Card}/>
                        <Route path='/audio' component={Audio}/>
                    </Switch>
                </div>
            );
        }
    }

    export default Content;
    
    // Head.propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // Head.defaultProps = {
    //     initialValue: ''
    // };
    
    