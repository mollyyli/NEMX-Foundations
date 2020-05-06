import React, { useState, useEffect} from "react";
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
import Slider from "react-slick";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Confirm from "../pics/confirm.svg";
import "./index.css";
import Avatar from "@material-ui/core/Avatar";


var ID = null;
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

// import data from json file
var freshProduceItems
var meatProteinItems 
var grainsBreadsItems 
var drinksDairyItems 
var snacksDessertsItems
var spicesCondimentsItems
var soupItems 
//console.log("Import: " + test.);

// for test adding items via DB
//const freshProduceItems = [
//  { title: "Garlic", img: Garlic, amount: 0, quantity: 0 }
//]

// want to use this:
//var freshProduceItems = []
//freshProduceItems.push({ title: "Garlic", img: Garlic, amount: 0, quantity: 0 });


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

export default function Order(db) {

  // // var all = db.db.ref("fresh")
  // // all.on("value", function(snapshot) {
  // //   console.log(snapshot.val());
  // //   freshProduceItems = snapshot.val();
  // // })

  // var meat = db.db.ref("meat")
  // meat.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   meatProteinItems = snapshot.val();
  // })

  // var drink = db.db.ref("drink")
  // drink.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   drinksDairyItems = snapshot.val();
  // })


  // var grains = db.db.ref("grains")
  // grains.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   grainsBreadsItems = snapshot.val();
  // })


  // var snacks = db.db.ref("snacks")
  // snacks.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   snacksDessertsItems = snapshot.val();
  // })


  // var soup = db.db.ref("soup")
  // soup.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   soupItems = snapshot.val();
  // })


  // var spices = db.db.ref("spices")
  // soup.on("value", function(snapshot) {
  //   console.log(snapshot.val());
  //   spicesCondimentsItems = snapshot.val();
  // })


  // var all = db.db.ref("fresh")

  // all.once("value").then(function(data){
  //   freshProduceItems = data.val();
  //   console.log(freshProduceItems)
  //   fpUpdateItems(data)
  // })
 


  // //db.db.child("/inventory").remove();
  // //db.db.child("/inventory").update(freshProduceItems);

  // // Code to extract the inventory from the database to this file
  // useEffect(()=>{

  var all = db.db.ref("fresh")
  all.once("value").then(function(data){
    freshProduceItems = data.val();
    console.log(freshProduceItems)
    fpUpdateItems(data.val())
  })

  // // f.once("value")
  // // .then(function(snapshot) {
  // //   var key = snapshot.key; // null
  // //   var childKey = snapshot.child("users/ada").key; // "ada"
  // // });

  // var meat = db.db.ref("meat")
  // meat.on("value", function(snapshot) {
  //   meatProteinItems = snapshot.val();
  // })

  // var drink = db.db.ref("drink")
  // drink.on("value", function(snapshot) {
  //   drinksDairyItems = snapshot.val();
  // })


  // var grains = db.db.ref("grains")
  // grains.on("value", function(snapshot) {
  //   grainsBreadsItems = snapshot.val();
  // })


  // var snacks = db.db.ref("snacks")
  // snacks.on("value", function(snapshot) {
  //   snacksDessertsItems = snapshot.val();
  // })


  // var soup = db.db.ref("soup")
  // soup.on("value", function(snapshot) {
  //   soupItems = snapshot.val();
  // })


  // var spices = db.db.ref("spices")
  // spices.on("value", function(snapshot) {
  //   spicesCondimentsItems = snapshot.val();
  // })


  //   db.db.child("/inventory").on("value", function(snapshot) {
  //     for (var i = 0; i < snapshot.numChildren(); i++) {
  //       db.db.child("/inventory").child(i).on('value', function(dataSnapshot) {

  //         var newItem = { title: dataSnapshot.val().title, img: dataSnapshot.val().img, 
  //           amount: dataSnapshot.val().amount, quantity: dataSnapshot.val().quantity }
  //         console.log(newItem);
  //         freshProduceItems.push(newItem);
  //         console.log("Update: " + freshProduceItems);
  //       });
  //     }
  //   })    
  // },[db]);
  
  //console.log("Fresh produce items: " + freshProduceItems);
  


  const Modalclasses = useModalStyles();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function filterItems(items) {
    let cloneItems = items.slice(0);
    let results = [];
    while (cloneItems.length >= 7) {
      let itemArr = [];
      for (var i = 0; i < 7; i++) {
        //itemArr.push(cloneItems.shift());
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


  // Fresh Produce items
  const [fpItems, fpUpdateItems] = useState(freshProduceItems);

  // Meats and Proteins items
  const [mpItems, mpUpdateItems] = useState(meatProteinItems);

  // Grains abd Breads items
  const [gbItems, gbUpdateItems] = useState(grainsBreadsItems);

  // Drinks abd Dairy items
  const [ddItems, ddUpdateItems] = useState(drinksDairyItems);

  // Snacks and Desserts items
  const [sdItems, sdUpdateItems] = useState(snacksDessertsItems);

  // Spices and Condiments items
  const [scItems, scUpdateItems] = useState(spicesCondimentsItems);

  // Soups items
  const [sItems, sUpdateItems] = useState(soupItems);

  // const [cart, updateCart] = useState([]);
  const classes = useStyles();
  
  // for fresh produce only!
  let handleRemoveFP = (arrIndex, objIndex) => {
    let cloneArr = [...fpItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    fpUpdateItems(cloneArr);
  };

  // for fresh produce only!
  let handleAddFP = (arrIndex, objIndex) => {
    let cloneArr = [...fpItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    fpUpdateItems(cloneArr);
  };


  // for meats and proteins only!
  let handleRemoveMP = (arrIndex, objIndex) => {
    let cloneArr = [...mpItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    mpUpdateItems(cloneArr);
  };

  // for meats and proteins only!
  let handleAddMP = (arrIndex, objIndex) => {
    let cloneArr = [...mpItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    mpUpdateItems(cloneArr);
  };


  // for grains breads only!
  let handleRemoveGB = (arrIndex, objIndex) => {
    let cloneArr = [...gbItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    gbUpdateItems(cloneArr);
  };

  // for grains breads only!
  let handleAddGB = (arrIndex, objIndex) => {
    let cloneArr = [...gbItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    gbUpdateItems(cloneArr);
  };


  // for drinks dairy only!
  let handleRemoveDD = (arrIndex, objIndex) => {
    let cloneArr = [...ddItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    ddUpdateItems(cloneArr);
  };

  // for drinks dairy only!
  let handleAddDD = (arrIndex, objIndex) => {
    let cloneArr = [...ddItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    ddUpdateItems(cloneArr);
  };


  // for snacks and desserts only!
  let handleRemoveSD = (arrIndex, objIndex) => {
    let cloneArr = [...sdItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    sdUpdateItems(cloneArr);
  };

  // for snacks and desserts only!
  let handleAddSD = (arrIndex, objIndex) => {
    let cloneArr = [...sdItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    sdUpdateItems(cloneArr);
  };


  // for spices condiments only!
  let handleRemoveSC = (arrIndex, objIndex) => {
    let cloneArr = [...scItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    scUpdateItems(cloneArr);
  };

  // for spices condiments only!
  let handleAddSC = (arrIndex, objIndex) => {
    let cloneArr = [...scItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    scUpdateItems(cloneArr);
  };


  // for soups only!
  let handleRemoveS = (arrIndex, objIndex) => {
    let cloneArr = [...sItems];
    cloneArr[arrIndex][objIndex].amount -= 1;
    sUpdateItems(cloneArr);
  };

  // for soups only!
  let handleAddS = (arrIndex, objIndex) => {
    let cloneArr = [...sItems];
    cloneArr[arrIndex][objIndex].amount += 1;
    sUpdateItems(cloneArr);
  };
  console.log("ttttttttttesssssssssttttttt")
  console.log(fpItems)

  // adding all items to cart for submission
  let handleSubmit = () => {
    let cart = [];

    // add fresh produce order to the cart
    fpItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    // add meats and proteins order to the cart
    mpItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    // add grains and breads order to the cart
    gbItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    // add drinks and dairy order to the cart
    ddItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    // add snacks and desserts order to the cart
    sdItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    // add spices and condiments order to the cart
    scItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    // add soups order to the cart
    sItems.map(arr => {
      arr.map(item => {
        if (item.amount !== 0) {
          cart.push(item);
        }
      });
    });

    setCart(cart);
    setOpen(true);
    console.log(cart);
    var cart_temp = {};
    for ( let i = 0; i < cart.length; i++) {
      cart_temp[cart[i]["title"]] = cart[i]["amount"]
    }
    console.log(cart_temp)
    console.log(db);
    ID = db.db.push(cart_temp).key;

  };


// Link's not working!!
  return (
    //  style={{ margin: "0 40px" }}
    <div id='top'>
      <NavBar cart={currOrders} handleSubmit={handleSubmit} />
      <div id='nav' style={{ margin: "0 40px" }}>
        <div>
          <img src={Emptycart} style={{ justify: "center", height: "300px" }} />
        </div>

        <div>
          <Grid container spacing={7}>
            <Grid item xs={2} sm={1}>
              <Link smooth to="#freshProduce">
                <Paper className={classes.paper}>Fresh Produce</Paper>
              </Link>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link smooth to="#meatProtein"> 
                <Paper className={classes.paper}>Meat & Protien</Paper>
              </Link>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link smooth to="#grainsBreads">
                <Paper className={classes.paper}>Grains & Breads</Paper>
                </Link>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link smooth to="#drinksDairy">
                <Paper className={classes.paper}>Drinks & Dairy</Paper>
              </Link>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link smooth to="#snacksDeserts">
                <Paper className={classes.paper}>Snacks & Desserts</Paper>
              </Link>
            </Grid>
            <Grid item xs={2} sm={2}>
              <Link smooth to="#spicesCondiments">
                <Paper className={classes.paper}>Spices & Condiments</Paper>
              </Link>
            </Grid>
            <Grid item xs={2} sm={1}>
              <Link smooth to="#soups">
                <Paper className={classes.paper}>Soups</Paper>
              </Link>
            </Grid>
          </Grid>
        </div>

        <div>
          {" "}
          <div
            id="freshProduce"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Fresh Produce
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" , border: '100px'}}>
              {fpItems.map((itemArr, arrIndex) => (
                <div className={classes.section3}>
                  <Grid container
                    margin-left='50px'
                    padding-left='50px'>

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
                            onClick={() => handleAddFP(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveFP(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddFP(arrIndex, objIndex)}
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
        
        <br/>
        <br/>

        <div>
          {" "}
          <div
            id="meatProtein"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Meat & Protein
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {mpItems.map((itemArr, arrIndex) => (
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
                            onClick={() => handleAddMP(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveMP(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddMP(arrIndex, objIndex)}
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

        <br/>
        <br/>

        <div>
          {" "}
          <div
            id="grainsBreads"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Grains & Breads
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {gbItems.map((itemArr, arrIndex) => (
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
                            onClick={() => handleAddGB(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveGB(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddGB(arrIndex, objIndex)}
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

        <br/>
        <br/>

        <div>
          {" "}
          <div
            id="drinksDairy"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Drinks & Dairy
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {ddItems.map((itemArr, arrIndex) => (
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
                            onClick={() => handleAddDD(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveDD(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddDD(arrIndex, objIndex)}
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

        <br/>
        <br/>

        <div>
          {" "}
          <div
            id="snacksDesserts"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Snacks & Desserts
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {sdItems.map((itemArr, arrIndex) => (
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
                            onClick={() => handleAddSD(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveSD(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddSD(arrIndex, objIndex)}
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

        <br/>
        <br/>

        <div>
          {" "}
          <div
            id="spicesCondiments"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Spices & Condiments
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {scItems.map((itemArr, arrIndex) => (
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
                            onClick={() => handleAddSC(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveSC(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddSC(arrIndex, objIndex)}
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

        <br/>
        <br/>

        <div>
          {" "}
          <div
            id="soups"
            style={{ backgroundColor: "white", borderRadius: "0.5rem" }}
          >
            <h4 style={{ margin: "10px 20px", padding: "10px 10px 0px 0px" }}>
              Soups
            </h4>
            <Divider />

            <Slider {...settings} style={{ paddingBottom: "20px" }}>
              {sItems.map((itemArr, arrIndex) => (
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
                            onClick={() => handleAddS(arrIndex, objIndex)}
                          >
                            <AddIcon fontSize="small" /> Add to cart
                          </Button>
                        ) : (
                          <div>
                            <Button
                              onClick={() => handleRemoveS(arrIndex, objIndex)}
                            >
                              <RemoveIcon />
                            </Button>
                            {item.amount}
                            <Button
                              onClick={() => handleAddS(arrIndex, objIndex)}
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

        <br/>
        <br/>

      </div>

      <div align='center'> 
        <Button variant='contained'> 
          <Link smooth to="#top"> Top Of Page </Link>
        </Button>
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
              <div>
                <Button variant='contained' color='secondary' onClick={handleClose}>
                  X
                </Button>
              </div>
              <br/>
            <img src={Confirm} style={{ height: 150, weight: 150 }} />
            <Typography variant="h7" id="transition-modal-title" font-size='50px'>
              Your Shopping Cart
            </Typography>

            <Typography varient="h7" id="transition-modal-description">
              You have selected:
              {cart.map(item => (
                <div>
                  <img src={item.img} style={{ height: 50, weight: 50 }} />
                  &nbsp; {item.title} {item.amount}
                </div>
              ))}
            </Typography>
            <div align='right' variant="contained" id='submit-btn'>
              <Button 
                style={{
                  backgroundColor: "#bad7dfff"
                }}> 
                Submit Order 
              </Button>
            </div>
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
