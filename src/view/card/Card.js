import React, { Component } from 'react';

import './card.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock,Form } from 'react-bootstrap';
class Card extends React.Component {
    
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
                isLoading: false,
                show:false
            };
    
            
    
            // ES6 类中函数必须手动绑定
            //this.handleChange = this.handleChange.bind(this);//构造函数中绑定

            // this.handleClick = this.handleClick.bind(this);
            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);
        }
    
        // handleChange(event) {
        //     this.setState({
        //         text: event.target.value
        //     });
        // }

        handleClose() {
            this.setState({ show: false });
          }
        
          handleShow() {
            this.setState({ show: true });
          }
        // handleClick() {
        //     this.setState({ modal: true });
        
        //     // This probably where you would have an `ajax` call
        //     setTimeout(() => {
        //       // Completed of async action, set loading state back
        //       this.setState({ isLoading: false });
        //     }, 2000);
        //   }
        
        render() {
            const columns = [
                {
                  Header: 'Name',
                  accessor: 'name',
                  width:'45%'
                },
                {
                    Header: 'Order',
                    accessor: 'order',
                    width:'10%'
                },
                {
                    Header: 'Like',
                    accessor: 'like_count',
                    width:'10%'
                },
                {
                    Header: 'Dislike',
                    accessor: 'dislike_count',
                    width:'10%'
                },
                {
                    Header: 'Created Date',
                    accessor: 'createdAt',
                    width:'20%'
                },
                {
                    Header: 'Actions',
                    accessor: 'guid',
                    Cell: props => <span className="table-action"><i className="far fa-edit"></i><i className="far fa-trash-alt"></i></span>,
                    width:'100'
                }
            ]

            const data = [
                {   
                    guid:'1',
                    name: 'Card1',
                    order: 1,
                    like_count: 26,
                    dislike_count: 43,
                    createdAt: Date()
                },
                {
                    guid:'2',
                    name: 'Card2',
                    order: 2,
                    like_count: 777,
                    dislike_count: 43,
                    createdAt: Date()
                },
                {
                    guid:'3',
                    name: 'Card3',
                    order: 3,
                    like_count: 444,
                    dislike_count: 33322,
                    createdAt: Date()
                }
            ]

            const formInstance = [
                {
                  id: "scenario1",
                  type: "text",
                  label: "Card Name",
                  placeholder: "Enter text"
                },
                {
                  id: "scenario2",
                  type: "text",
                  label: "Card Desc",
                  placeholder: "Enter text"
                },
                {
                  id: "scenario3",
                  type: "text",
                  label: "Card order",
                  placeholder: "Enter text"
                },
                {
                  id: "scenarioFile",
                  type: "file",
                  label: "Image",
                  placeholder: "Example block-level help text here."
                }
            ]
            function fields(formFields) {
                return formFields.map((field) => {
                  return FieldGroup({ id:field.id, label:field.label, help:field.help,type:field.type });
                })
            }

            function FieldGroup({ id, label, help, ...props }) {
                return (
                  <FormGroup controlId={id} key={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                  </FormGroup>
                );
              }
            return (
                <div className="Card">
                    <div className = "button-block">
                        <Button bsStyle="primary"
                                onClick= {this.handleShow} 
                        >Add Card</Button>
                        
                    </div>
                    <div className = "table-block">
                        <ReactTable
                                data = {data}
                                columns = {columns}
                                filterable = {true} 
                                defaultPageSize = {10}
                        /> 
                    </div>

                    <div className="modal-block">
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                {fields(formInstance)}
                                <Button type="submit">Submit</Button>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            );
        }
    }
    export default Card;
    
    // Head.propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // Head.defaultProps = {
    //     initialValue: ''
    // };

   
    
    
    