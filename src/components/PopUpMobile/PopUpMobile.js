import React from "react";
import ResponsePopUp from './ResponsePopUp';

class PopUpMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  render() {
    return (
      <div className="PopUpMovile">
        <ResponsePopUp />
      </div>
    );
  }
}

export default PopUpMobile;
