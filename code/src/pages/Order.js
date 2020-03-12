import React, { useState } from "react";
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
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Confirm from "../pics/confirm.svg";
import "./index.css";
import Avatar from "@material-ui/core/Avatar";

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
  { title: "Banana", img: Banana, amount: 0, quantity: 0 },
  { title: "Strawberry", img: Strawberry, amount: 0, quantity: 1 },
  { title: "Cucumber", img: Cucumber, amount: 0, quantity: 1 },
  { title: "Apple", img: Apple, amount: 0, quantity: 0 },
  { title: "Grape", img: Grape, amount: 0, quantity: 1 },
  { title: "Green Pepper", img: GreenPepper, amount: 0, quantity: 0 },
  { title: "Rasberry", img: Rasberry, amount: 0, quantity: 1 },
  { title: "Blackberry", img: Blackberry, amount: 0, quantity: 1 },
  { title: "Broccoli", img: Broccoli, amount: 0, quantity: 1 },
  { title: "Tomato", img: Tomato, amount: 0, quantity: 1 },
  { title: "Red Onion", img: RedOnion, amount: 0, quantity: 1 },
  { title: "Cabbage", img: Cabbage, amount: 0, quantity: 1 },
  { title: "Orange", img: Orange, amount: 0, quantity: 1 },
  { title: "Squash", img: Squash, amount: 0, quantity: 1 },
  { title: "Kiwi", img: Kiwi, amount: 0, quantity: 1 },
  { title: "Pear", img: Pear, amount: 0, quantity: 1 },
  { title: "Red Beets", img: RedBeets, amount: 0, quantity: 1 },
  { title: "Brussels Sprouts", img: BrusselsSprouts, amount: 0, quantity: 1 },
  { title: "Avocado", img: Avocado, amount: 0, quantity: 1 },
  { title: "Red Radishes", img: RedRadishes, amount: 0, quantity: 1 },
  { title: "Garlic", img: Garlic, amount: 0, quantity: 0 }
];
const useModalStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Order(props) {
  const Modalclasses = useModalStyles();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [items, updateItems] = useState(filterItems(freshProduceItems));
  // const [cart, updateCart] = useState([]);
  const classes = useStyles();
  function filterItems(items) {
    let cloneItems = items.slice(0);
    let results = [];
    while (cloneItems.length >= 7) {
      let itemArr = [];
      for (var i = 0; i < 7; i++) {
        var obj = cloneItems.shift();
        if (obj.quantity > 0) {
          itemArr.push(obj);
        } else {
          i--;
        }
      }
      results.push(itemArr);
    }
    if (cloneItems.length > 0) {
      results.push(cloneItems);
    }
    return results;
  }

  // let checkAmount = (arrIndex, objIndex) => {
  //   let cloneArr = [...items];
  //   if (cloneArr[arrIndex][objIndex].amount > 0) {
  //     updateItems(cloneArr);
  //   }
  // };

  let handleRemove = (arrIndex, objIndex) => {
    let cloneArr = [...items];
    cloneArr[arrIndex][objIndex].amount -= 1;
    updateItems(cloneArr);
  };

  let handleAdd = (arrIndex, objIndex) => {
    let cloneArr = [...items];
    cloneArr[arrIndex][objIndex].amount += 1;
    updateItems(cloneArr);
  };

  let handleSubmit = () => {
    let cart = [];
    items.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });
    setCart(cart);
    setOpen(true);
    console.log(cart);
  };
  return (
    //  style={{ margin: "0 40px" }}
    <div>
      <NavBar cart={currOrders} handleSubmit={handleSubmit} />
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
              {items.map((itemArr, arrIndex) => (
                <div className={classes.section3}>
                  <Grid container>
                    {itemArr.map((item, objIndex) => (
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
                        {item.amount === 0 ? (
                          <Button
                            size="small"
                            onClick=""
                            color="primary"
                            variant="outlined"
                            onClick={() => handleAdd(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemove(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAdd(arrIndex, objIndex)}
                              // {item.amount > item.quantity ? disabled : ""}
                            >
                              <AddIcon />
                            </Button>
                          </div>
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={Modalclasses.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={Modalclasses.paper}>
            <img src={Confirm} style={{ height: 150, weight: 150 }} />
            <Typography variant="h7" id="transition-modal-title">
              Thanks for completing the from! Your order number is: 46{" "}
            </Typography>

            <Typography varient="h7" id="transition-modal-description">
              You have selected:
              {cart.map(item => (
                <div>
                  <img src={item.img} style={{ height: 50, weight: 50 }} />
                  {item.title} {item.amount}
                </div>
              ))}
            </Typography>
          </div>
        </Fade>
      </Modal>
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
