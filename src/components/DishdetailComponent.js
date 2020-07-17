import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DishDetail extends Component {

    renderComments(dish) {
        if (dish != null) {
            const commentsSection = dish.comments.map(detail=> {
                return (
                    <div className="row-content mt-5">
                        {detail.comment}
                        <br></br>
                        --{detail.author},<span> </span>   
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(detail.date)))}
                    </div>
                );
            });
    
            return ( 
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div className="col-12">{commentsSection}</div> 
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
    render() {
        

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
                
            </div>
            

        );
    }
}

export default DishDetail;