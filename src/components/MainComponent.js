import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../share/dishes';
import { COMMENTS } from '../share/comments';
import { LEADERS } from '../share/leaders';
import { PROMOTIONS } from '../share/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = ()=>{
      return (
        <Home dish = {this.state.dishes.filter((dish)=>dish.featured)[0]}
              promotion = {this.state.promotions.filter((promo)=>promo.featured)[0]}
              leader = {this.state.leaders.filter((leader)=>leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({ match })=> {
      return (
        <DishDetail 
          dish = {this.state.dishes.filter(
            (dish)=> dish.id === parseInt(match.params.dishId, 10)
          )[0]} 
          comments = {this.state.comments.filter(
            (comment)=> comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />  
      );
    }

    return (
      <div>
        <Header />
        {/* //old-way
          <Menu   
            dishes = {this.state.dishes} 
            onClick = {(dishId) => this.onDishSelect(dishId)} /> */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component= {() =>
            <Menu   
            dishes = {this.state.dishes} />
            } />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;