import React from 'react'
import BarHead from '../../components/BarHead/BarHead'

class Home extends React.Component {
    constructor(props){
        super (props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        
      }
    
    componentWillUnmount() {
        
    }
    render(){
        return (<div className="Home">
            <BarHead />
        </div>)
    }
}

export default Home;