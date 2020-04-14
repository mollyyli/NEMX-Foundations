import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
// import Autocomplete from 'material-ui/AutoComplete/AutoComplete';
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Diet from "../pics/diet.svg";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    width: "600px",
    margin: "100px 0px 0px 0px",
    borderRadius: "4px",
    padding: "50px",
    boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
    // position: "absolute",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 450
    },
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

const MultilineTextFields = ({db}) => {
console.log(db)

  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");
  const [limitation, setLimitation] = React.useState("");
  const [allergy, setAllergy] = React.useState("");
  const [transportation, setTransportation] = React.useState("");
  console.log(allergy)
  console.log(limitation)
  const handleChange = event => {
    setCurrency(event.target.value);
    event.preventDefault();
  };

  const handleLimitationChange = event => {
    setLimitation(event.target.value);
    event.preventDefault();
  };

  const handleAllergyChange = event => {
    console.log(event.target);
    
    setAllergy(allergy.concat(event.target.innerText, " "));
    event.preventDefault();
  };

  const handleTransportationChange = event => {
    setTransportation(event.target.value);
    event.preventDefault();
  };
  
  const handleSubmit = event => {
    var temp = db.push({currency, limitation, allergy, transportation});
    console.log(temp.key);
  }
  return (
    <div>
      <NavBar />

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <form className={classes.root} noValidate autoComplete="off">
          <h2>
            <b>Tell us about your family.</b>
          </h2>
          <h4>Please complete the following information so we can best meet your needs.</h4>
          <div>
            <TextField
              // error
              // color="secondary"
              id="standard-select-currency"
              select
              label="Family Size"
              value={currency}
              onChange={handleChange}
              helperText="Please select your family size"
              variant="outlined"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-select-currency-native"
              select
              label="Dietary Limitation"
              value={limitation}
              onChange={handleLimitationChange}
              helperText="Please select your dietary limitation"
              variant="outlined"
            >
              {limitations.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={allergies}
              onChange = {handleAllergyChange}
              getOptionLabel={option => option.label}
              // defaultValue={[top100Films[13]]}
              filterSelectedOptions
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Allergies"
                  placeholder="Tell us about your allergies"
                  value = {allergy}

                />
              )}
            />
            <TextField
              id="standard-select-currency-native"
              select
              label="Transportation Method"
              value={transportation}
              onChange={handleTransportationChange}
              helperText="Please select your trasportation method"
              variant="outlined"
            >
              {transportations.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div style={{ textAlign: "right", width: "90%" }}>
              <Link to={{pathname:'/order', state:{userID:999999}}}>
                <Button to="/order"
                  renderAs="button"
                  className="next-button"
                  ize="medium"
                  variant="contained"
                  disableRipple
                  color="primary"
                  style={{ backgroundColor: "#2F2E40" }}
                  onClick= {handleSubmit}
                >
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </form>
        <img src={Diet} style={{ marginTop: "100px" }} />
      </div>
    </div>
  );
}

const currencies = [
  {
    value: "ONE",
    label: "1"
  },
  {
    value: "TWO",
    label: "2"
  },
  {
    value: "THREE",
    label: "3"
  },
  {
    value: "FOUR",
    label: "4"
  },
  {
    value: "FIVE",
    label: "5"
  },
  {
    value: "SIX",
    label: "6"
  }
];
const limitations = [
  {
    value: "Lactose Intolerance",
    label: "Lactose Intolerance"
  },
  {
    value: "Vegan",
    label: "Vegan"
  },
  {
    value: "PESCETARIAN",
    label: "Pescetarian"
  },
  {
    value: "OVO",
    label: "Ovo-Vegetarian"
  },
  {
    value: "LACTOV",
    label: "Lacto-Vegetarian"
  }
];

const allergies = [
  {
    value: "PEANUT",
    label: "Peanut"
  },
  {
    value: "MILK",
    label: "Milk"
  },
  {
    value: "EGG",
    label: "Egg"
  },
  {
    value: "WHEAT",
    label: "Wheat"
  },
  {
    value: "SOY",
    label: "Soy"
  },
  {
    value: "FISH",
    label: "Fish"
  },
  {
    value: "SHELLFISH",
    label: "Shellfish"
  },
  {
    value: "NONE",
    label: "None"
  }
];

const transportations = [
  {
    value: "CAR",
    label: "Car"
  },
  {
    value: "BUS",
    label: "Bus"
  },
  {
    value: "LIGHT RAIL",
    label: "Light Rail"
  },
  {
    value: "RIDE SHARING",
    label: "Uber or Lyft"
  },
  {
    value: "WALK",
    label: "Walk"
  }
];

export default MultilineTextFields