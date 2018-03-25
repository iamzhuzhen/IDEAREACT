
import React, { Component } from 'react';
import './head.css';

class Head extends React.Component {
    
    // static propTypes = {//类的静态属性
    //     initialValue: React.PropTypes.string
    // };

    // static defaultProps = {//类的静态属性
    //     initialValue: ''
    // };xxxxxxxxx
    
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder',
            isLoading: false
        };

        

        // ES6 类中函数必须手动绑定fdcx
        //this.handleChange = this.handleChange.bind(this);//构造函数中绑定
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div className="Head">
                {/* Head
                Type something:
                <input onChange={this.handleChange.bind(this)}//使用bind来绑定
               value={this.state.text} /> */}
               Head
            </div>
        );
    }
}

export default Head;

// Head.propTypes = {
//     initialValue: React.PropTypes.string
// };
// Head.defaultProps = {
//     initialValue: ''
// };

