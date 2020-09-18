import React from "react";
import "./Foods.scss";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import store from "../../redux/store";

class Foods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foods: [] };
    this.unsubscribe = null;
  }

  componentDidMount(){
    const fs = store.getState().foodReducer.foods;
    if(fs.length > 0){
      this.setState({
        foods: fs
      });
    }
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        foods: store.getState().foodReducer.foods,
      });
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    const useStyles = makeStyles((theme) => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        scrollSnapType: "x mandatory",
        overflowScrolling: "touch",
        WebkitOverflowScrolling: "touch",
        backgroundColor: theme.palette.background.paper,
        zIndex: -1,
      },
      gridList: {
        width: 600,
        height: 500,
        zIndex: -1,
      },
      icon: {
        color: "rgba(255, 255, 255, 0.54)",
      },
    }));
    const classes = useStyles;
    return (
      <div id="foods" className="Foods">
        <GridList cellHeight={280} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader
              component="div"
              style={{
                color: "#000000",
                fontSize: 20,
                fontWeight: "bold",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
              }}
            >
              Comidas
            </ListSubheader>
          </GridListTile>
          {this.state.foods.map((tile) => (
            <GridListTile key={tile.key}>
              <img src={tile.food.img} alt={tile.food.nombre} />
              <GridListTileBar
                title={tile.title}
                subtitle={
                  <span style={{ fontSize: 16 }}>{tile.food.description}</span>
                }
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.food.nombre}`}
                    className={classes.icon}
                  >
                    <AddIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default Foods;
