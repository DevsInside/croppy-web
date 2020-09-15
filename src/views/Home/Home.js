import React from "react";
import Footer from "../../components/Footer/Footer";
//import BarHead from '../../components/BarHead/BarHead'
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {}

  componentWillUnmount() {}
  
  render() {
    const width = window.innerWidth;
    console.log('Width: ', width);
    return (
      <div className="Home">
        <Nav />
        <Hero widthResponse={{width}} />
        <Footer />
      </div>
    );
  }
}

export default Home;
