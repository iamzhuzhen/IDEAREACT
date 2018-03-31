import React, { Component } from 'react';

import './scenario.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock,Button,Form } from 'react-bootstrap';


// import ReactTable from 'react-table';
// import 'react-table/react-table.css'



  class Scenario extends React.Component {
    
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
                value: ''
              };
    
            
    
            // ES6 类中函数必须手动绑定
            this.handleChange = this.handleChange.bind(this);//构造函数中绑定
        }
    
        handleChange(event) {
            this.setState({ value: event.target.value });
        }

      
        

          
    
        render() {

          
            return (
                <div className="Scenario">
                  <Form>
                    {fields(formInstance)}
                    <Button type="submit">Submit</Button>
                   </Form>
                </div>
            );
        }
    }
    export default Scenario;
    
    // Head.propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // Head.defaultProps = {
    //     initialValue: ''
    // };

    
    function FieldGroup({ id, label, help, ...props }) {
        return (
          <FormGroup controlId={id} key={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
      }

    function fields(formFields) {
      return formFields.map((field) => {
        return FieldGroup({ id:field.id, label:field.label, help:field.help,type:field.type });
      })
    }
      const formInstance = [
        {
          id: "scenario1",
          type: "text",
          label: "Scenario Label",
          placeholder: "Enter text"
        },
        {
          id: "scenario2",
          type: "text",
          label: "Scenario Desc",
          placeholder: "Enter text"
        },
        {
          id: "scenario3",
          type: "text",
          label: "Scenario Label",
          placeholder: "Enter text"
        },
        {
          id: "scenarioFile",
          type: "file",
          label: "File",
          placeholder: "Example block-level help text here."
        }
      ]

      // const data = [
      //     {
      //     name: 'Tanner Linsley',
      //     age: 26,
      //     friend: {
      //       name: 'Jason Maurer',
      //       age: 23,
      //     }
      //   }, {
      //     name: 'Tanner Linsley',
      //     age: 26,
      //     friend: {
      //       name: 'Jason Maurer',
      //       age: 23,
      //     }
      //   }
      // ]

      // const columns = [{
      //   Header: 'Name',
      //   accessor: 'name' // String-based value accessors!
      // }, {
      //   Header: 'Age',
      //   accessor: 'age',
      //   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      // }, {
      //   id: 'friendName', // Required because our accessor is not a string
      //   Header: 'Friend Name',
      //   accessor: d => d.friend.name // Custom value accessors!
      // }, {
      //   Header: props => <span>Friend Age</span>, // Custom header components!
      //   accessor: 'friend.age'
      // }]

      // const columns = [
      //   {
      //     Header: 'Name',
      //     accessor: 'name'
      //   }
      // ]