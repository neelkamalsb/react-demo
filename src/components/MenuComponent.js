import React /*, /*this not needed for functional components{ Component } */ from 'react';
import { Card, CardImg, CardImgOverlay, BreadcrumbItem, Breadcrumb, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

// 1st way to write function
function RenderMenuItem({ dish, onClick }) {
  return (
    /*<Card onClick={() => onClick(dish.id)}>*/
    <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
    </Card>
  );
}


// 2nd way to write function
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="row">
          {menu}
        
      </div>
    </div>
  );
}

export default Menu;

/*


// Menu component as a class component
class Menu extends Component {
    constructor(props) {
        super(props);
        console.log("MenuComponent constructor is invoked");
    }


    render() {
        
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" object src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        console.log("MenuComponent render is invoked");
        return (
          <div className="container">
            <div className="row">
                {menu}
              
            </div>
          </div>
        );
        
    }
}

export default Menu;

*/



