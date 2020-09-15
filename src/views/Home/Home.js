import React from "react";
import Footer from "../../components/Footer/Footer";
//import BarHead from '../../components/BarHead/BarHead'
import Nav from "../../components/Nav/Nav";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div className="Home">
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default Home;
