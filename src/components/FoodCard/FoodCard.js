import { Card, CardContent, CardMedia, CardActions, IconButton } from '@material-ui/core';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './FoodCard.scss';

class FoodCard extends React.Component {
    render(){
        return (<div className="FoodCard">
            <Card className="FCard">
                <CardMedia className="imgCard"
                    image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Paella dish"/>
                <CardContent>
                    {this.props.body}
                </CardContent>
                <CardActions className="actions">
                    <IconButton aria-label="favorite">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton aria-label="addToCart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>);
    }
}

export default FoodCard;