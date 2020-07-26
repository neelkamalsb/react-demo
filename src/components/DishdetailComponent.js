import React /*, /*this not needed for functional components{ Component } */ from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../share/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
                <div className="col-12 col-md-5 m-1">
                    <FadeTransform in 
                    tranformProps = {{
                    exitTransform: 'scale(0.5) translateY(-50%)' 
                    }}>
                        <Card>
                            <CardImg width="100%" object src={baseUrl + dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments, addComment, dishId }) {
    if (comments != null) {
        const commentsSection = comments.map(detail=> {
            return (
                <Fade in>
                <div className="mt-5">
                    {detail.comment}
                    <br></br>
                    --{detail.author},<span> </span>   
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(detail.date)))}
                </div>
                </Fade>
            );
        });

        return ( 
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <Stagger in>
                    <div className="col-12">{commentsSection}</div> 
                </Stagger>
                <CommentForm  dishId={dishId} addComment={addComment}/>  
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}


const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    if (props.dish!=null) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} 
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                </div>
            </div>
            
        </div>
        

    );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;

/*

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

*/