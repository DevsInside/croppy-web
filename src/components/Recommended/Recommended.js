import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import FoodCard from '../FoodCard/FoodCard';
import './Recommended.scss';

class Recommended extends  React.Component {
    render(){
        let maping = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        return (<div className="Recommended">
            <h3 className="header">Recomendaciones</h3>
            <ScrollContainer vertical={false} horizontal={true} className="RecommendedList">
                {maping.map((val) => {
                    return <FoodCard body={`Probando foodcard ${val}`}/>;
                })}
            </ScrollContainer>
        </div>);
    }
}

export default Recommended;