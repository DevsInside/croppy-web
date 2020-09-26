import { IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import React from "react";
import ReactDOM from "react-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import FoodCard from "../FoodCard/FoodCard";
import "./Recommended.scss";

class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = { interval: 0, pos: 0, stl: null, inside: false };
    this.movingForward = true;
    this.listScroll = React.createRef();
    this.nextRef = React.createRef();
    this.mouseEnterScroll = this.mouseEnterScroll.bind(this);
    this.mouseLeaveScroll = this.mouseLeaveScroll.bind(this);
    this.mouseEnterNext = this.mouseEnterNext.bind(this);
    this.mouseLeaveNext = this.mouseLeaveNext.bind(this);
  }

  mouseEnterScroll(event) {
    this.setState({
      stl: { scrollBehavior: null },
    });
    clearInterval(this.state.interval);
  }

  mouseLeaveScroll(event) {
    this.setState({
      stl: { scrollBehavior: "smooth" },
    });
  }

  mouseEnterNext(event) {
    this.setState({
      inside: true,
    });
    clearInterval(this.state.interval);
  }

  mouseLeaveNext(event) {
    this.setState({
      interval: setInterval(() => this.autoScroll(), 2500),
      inside: false,
    });
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => this.autoScroll(), 2500),
      stl: { scrollBehavior: "smooth" },
    });
    let elm = this.listScroll.current.getElement();
    elm.addEventListener("mouseenter", this.mouseEnterScroll);
    elm.addEventListener("mouseleave", this.mouseLeaveScroll);
    let elm2 = this.nextRef.current;
    elm2.addEventListener("mouseenter", this.mouseEnterNext);
    elm2.addEventListener("mouseleave", this.mouseLeaveNext);
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.listScroll.current).scrollTo(this.state.pos, 0);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  autoScroll() {
    if (this.listScroll.current) {
      let elm = ReactDOM.findDOMNode(this.listScroll.current);
      const scrollMoving = Math.ceil(elm.scrollWidth / 18);
      const scSize = elm.scrollWidth - elm.clientWidth;
      if (this.state.pos <= scSize && this.movingForward) {
        let calcNext = this.state.pos + scrollMoving;
        this.setState({ pos: calcNext > scSize ? scSize : calcNext });
        if (calcNext > scSize) {
          this.movingForward = false;
        }
      } else if (this.state.pos > 0) {
        this.movingForward = false;
        this.setState({ pos: this.state.pos - scrollMoving });
      } else {
        this.movingForward = true;
      }
    }
  }

  forwardScroll() {
    let elm = ReactDOM.findDOMNode(this.listScroll.current);
    const scrollMoving = Math.ceil(elm.scrollWidth / 18);
    const scSize = elm.scrollWidth - elm.clientWidth;
    if (this.state.pos <= scSize) {
      this.setState({ pos: this.state.pos + scrollMoving });
    }
  }

  backwardScroll() {
    let elm = ReactDOM.findDOMNode(this.listScroll.current);
    const scrollMoving = Math.ceil(elm.scrollWidth / 18);
    if (this.state.pos > 0) {
      this.setState({ pos: this.state.pos - scrollMoving });
    }
  }

  render() {
    let maping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    return (
      <div className="Recommended">
        <h3 className="header">Recomendaciones</h3>
        <div ref={this.nextRef} className="scrollNext">
          {this.state.inside ? (
            <p>
              <IconButton
                size="medium"
                onClick={() => this.backwardScroll()}
                style={{ color: "black"}}
                aria-label="delete"
              >
                <ArrowBackIosIcon fontSize="large" />
              </IconButton>
            </p>
          ) : null}
          <ScrollContainer
            ref={this.listScroll}
            vertical={false}
            horizontal={true}
            style={this.state.stl}
            className="RecommendedList"
          >
            {maping.map((val) => {
              return <FoodCard key={`${val}`} body={`Probando foodcard ${val}`} />;
            })}
          </ScrollContainer>
          {this.state.inside ? (
            <p>
              <IconButton
                size="medium"
                onClick={() => this.forwardScroll()}
                style={{ color: "black" }}
                aria-label="delete"
              >
                <ArrowForwardIosIcon fontSize="large" />
              </IconButton>
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Recommended;
