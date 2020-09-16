import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import Foods from "../../components/Foods/Foods";
import RequestFood from '../../redux/actions/foodAction';
import {foods, addingFood, foodRequest} from '../../redux/actions/foodAction'
import {connect} from 'react-redux';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { date: new Date(), width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    props.dispatch(RequestFood());
  }
  componentDidMount() {
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
      <div className="Home">
        <Nav />
        <Hero widthResponse={this.state.width} />
        <Foods />
      </div>
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
