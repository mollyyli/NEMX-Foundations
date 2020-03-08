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
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Banana from "../pics/bana.jpg";
import Slider from "react-slick";
import AddIcon from "@material-ui/icons/Add";
import Strawberry from "../pics/strawberry.png";
import Cucumber from "../pics/cucumber.jpg";
import Apple from "../pics/apple.jpg";
import Grape from "../pics/grape.jpg";
import GreenPepper from "../pics/greenpepper.jpg";
import Rasberry from "../pics/rasberry.jpg";
import Blackberry from "../pics/blackberry.jpg";
import Broccoli from "../pics/broccoli.jpg";
import Tomato from "../pics/tomato.jpg";
import RedOnion from "../pics/redonion.jpg";
import Cabbage from "../pics/cabbage.jpg";
import Orange from "../pics/orange.jpg";
import Squash from "../pics/squash.jpg";
import Kiwi from "../pics/kiwi.jpg";
import Pear from "../pics/pear.jpg";
import RedBeets from "../pics/redbeets.jpg";
import BrusselsSprouts from "../pics/brusselssprouts.jpg";
import Avocado from "../pics/avocade.jpg";
import RedRadishes from "../pics/redradishes.jpg";
import Garlic from "../pics/garlic.jpg";

import "./index.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  section3: {
    margin: theme.spacing(3, 1, 1)
  }
}));
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1
};

const freshProduceItems = [
  { title: "Banana", img: Banana },
  { title: "Strawberry", img: Strawberry },
  { title: "Cucumber", img: Cucumber },
  { title: "Apple", img: Apple },
  { title: "Grape", img: Grape },
  { title: "Green Pepper", img: GreenPepper },
  { title: "Rasberry", img: Rasberry },
  { title: "Blackberry", img: Blackberry },
  { title: "Broccoli", img: Broccoli },
  { title: "Tomato", img: Tomato },
  { title: "Red Onion", img: RedOnion },
  { title: "Cabbage", img: Cabbage },
  { title: "Orange", img: Orange },
  { title: "Squash", img: Squash },
  { title: "Kiwi", img: Kiwi },
  { title: "Pear", img: Pear },
  { title: "Red Beets", img: RedBeets },
  { title: "Brussels Sprouts", img: BrusselsSprouts },
  { title: "Avocado", img: Avocado },
  { title: "Red Radishes", img: RedRadishes },
  { title: "Garlic", img: Garlic },
];

export default function Order(props) {
  const classes = useStyles();
  function filterItems(items) {
    let cloneItems = items.slice(0);
    let results = [];
    while (cloneItems.length >= 7) {
      let itemArr = [];
      for (var i = 0; i < 7; i++) {
        itemArr.push(cloneItems.shift());
      }
      results.push(itemArr);
    }
    if (cloneItems.length < 0) {
      results.push(cloneItems);
    }
    return results;
  }
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
          <div
            id="freshproduce"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Fresh Produce
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {filterItems(freshProduceItems).map(itemArr => (
                <div className={classes.section3}>
                  <Grid container>
                    {itemArr.map(item => (
                      <Grid
                        item
                        xs
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                      >
                        <img
                          src={item.img}
                          style={{
                            height: 125,
                            weight: 125,
                            margin: "0 auto"
                          }}
                        />
                        <Typography gutterBottom variant="h8">
                          {item.title}
                        </Typography>
                        <Button
                          size="small"
                          onClick=""
                          color="primary"
                          variant="outlined"
                        >
                          <AddIcon fontSize="small" /> Add to cart
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ))}
            </Slider>
          </div>
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
