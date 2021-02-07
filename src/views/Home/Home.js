import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import Foods from "../../components/Foods/Foods";
import RequestFood from '../../redux/actions/foodAction';
import { addingFood, foodRequest } from '../../redux/actions/foodAction'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from "../Contact/Contact";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Recommended from "../../components/Recommended/Recommended";
import PopUpMobile from "../../components/PopUpMobile/PopUpMobile";
import { ThemeProvider } from "@material-ui/core";
import themedf from '../../themes/themedf';

const RenderFoods = () => (
  <div className="foodRend">
    <Recommended />
    <Foods />
  </div>
);
class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(RequestFood());
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render() {
    return (
      <ThemeProvider theme={ themedf }>
        <Router>
        <div className="Home">
          <PopUpMobile />
          <Nav />
          <Hero widthResponse={this.state.width} />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/" render={RenderFoods} />
          </Switch>
        </div>
      </Router>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = state => ({ foods: state.foods });
const mapDispatchToProps = (dispatch) => {
  return {
    foodRequest: foodRequest(dispatch),
    addingFood: addingFood(dispatch),
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
