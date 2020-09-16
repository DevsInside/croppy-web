import React from 'react';
import './Hero.scss';

class Hero extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="Hero">
            <header>
                <div style={{width: this.props.widthResponse, minWidth: 500}} className="container-img">
                    <div className="gradient-img">
                        <p>¡Hace tu pedido desde casa, nosotros te lo llevamos!</p>
                    </div>
                </div>
            </header>
        </div>);
    }
}

export default Hero;