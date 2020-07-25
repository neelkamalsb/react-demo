import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';


// Validation Functions
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        this.toggleModal();
        alert('Comment Succefully Submitted...'
            + '\n  Rating: ' + values.rating 
            + '\n  Your Name: ' + values.yourname
            + '\n  Comment: ' + values.comment);
        // alert('Comment Succefully Submitted...'
        //     + '\n  Rating: ' + this.rating.value 
        //     + '\n  Your Name: ' + this.yourname.value
        //     + '\n  Comment: ' + this.comment.value);
        //event.preventDefault();

        this.props.addComment(this.props.dishId, values.rating, values.yourname, values.comment);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    render() {
    return (
        <div>
            <div>
            <Button onClick={this.toggleModal} className="border border-dark btn btn-light mt-3 mb-3" >
                <span className="fa fa-pencil fa-lg" /> Submit a Comment
            </Button>
            </div>
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit a Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>

                        <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating" id="rating"
                                    validators={{
                                        required
                                    }}>
                                        <option>Select a Rating</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                            className="text-danger"
                                            model=".rating"
                                            show="touched"
                                            messages={{
                                                required: 'Required'
                                            }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" name="yourname" id="yourname"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                            className="text-danger"
                                            model=".yourname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                maxLength: 'Must be less than 16 characters',
                                                minLength: 'Must be more than 2 characters'
                                            }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group" >
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" name="yourname" id="yourname" rows='6'
                                    validators={{
                                        required
                                    }}/>
                                    <Errors
                                            className="text-danger"
                                            model=".comment"
                                            show="touched"
                                            messages={{
                                                required: 'Required'
                                            }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="success">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    
    );}
}

export default CommentForm;

/*


*/
