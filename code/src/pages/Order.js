import React from "react";
import Emptycart from "../pics/emptycart.svg";
import NavBar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from "react-router-hash-link";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Slider from "react-slick";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Order(props) {
  const classes = useStyles();
  return (
    //  style={{ margin: "0 40px" }}
    <div>
      <NavBar cart={currOrders} />
      <div style={{ margin: "0 40px" }}>
        <div>
          <img src={Emptycart} style={{ justify: "center", height: "300px" }} />
        </div>

        <div>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={2}>
              <Link smooth to="#freshproduce">
                <Paper className={classes.paper}>Fresh Produce</Paper>
              </Link>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper}>Meat & Protien</Paper>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper}>Grains & Breads</Paper>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper}>Drinks & Dairy</Paper>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper}>Snacks & Desserts</Paper>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Paper className={classes.paper}>Soups</Paper>
            </Grid>
          </Grid>
        </div>
        <div>
          {" "}
          <Slider {...settings} style={{ marginTop: "20px" }}>
            <div id="freshproduce">
              <Card>
                <CardHeader title="Fresh Produce" />
              </Card>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

let currOrders = [
  {
    name: "banana",
    amount: 2
  }
];
// export default Order;
