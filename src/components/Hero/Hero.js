import React from 'react';
import './Hero.scss';

class Hero extends React.Component {
    constructor(props){
        super(props);
        this.widthResponse = props.widthResponse.width;
    }

    render(){
        return (<div className="Hero">
            <header>
                <div style={{width: `${this.widthResponse}px!important`}} className="container-img">
                    <div className="gradient-img"></div>
                </div>
            </header>
        </div>);
    }
}

export default Hero;