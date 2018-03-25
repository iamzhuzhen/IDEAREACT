import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './menu.css';

class Menu extends React.Component {
    
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
                <div className="Menu">
                    <ul>
                        <li><Link to='/'>Scenario</Link></li>
                        <li><Link to='/card'>Card</Link></li>
                        <li><Link to='/word'>Word</Link></li>
                        <li><Link to='/image'>Image</Link></li>
                        <li><Link to='/audio'>Audio</Link></li>                      
                    </ul>
                </div>
            );
        }
    }
    
    export default Menu;
    
    // Head.propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // Head.defaultProps = {
    //     initialValue: ''
    // };

    var initState = {
        menu: {
            name:'Edu',
            menu_list:[
                {
                    name: 'Scenario',
                    link: '/'
                },
                {
                    name: 'Card',
                    link: '/card'
                },
                {
                    name: 'Word',
                    link: '/word'
                },
                {
                    name: 'Image',
                    link: '/image'
                },
                {
                    name: 'Audio',
                    link: '/audio'
                },
            ]
        }
      }
    
    