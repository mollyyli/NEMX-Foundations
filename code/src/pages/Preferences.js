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

const useStyles = makeStyles((theme) => ({
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
      width: 450,
    },
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
  rootTextField: { display: "flex", flexWrap: "wrap" },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const MultilineTextFields = ({db})=> {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");
  const [age, setAge] = React.useState("");
  const [first, setFirst] = React.useState("");
  const [middle, setMiddle] = React.useState("");
  const [last, setLast] = React.useState("");
  const [recordNum, setRecordNum] = React.useState("");
  const [clinic, setClinic] = React.useState("");
  const [limitation, setLimitation] = React.useState("");
  const [allergy, setAllergy] = React.useState("");
  const [transportation, setTransportation] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    event.preventDefault();
  };

  const handleFirst = (event) => {
    setFirst(event.target.value);
    event.preventDefault();
  }
  const handleMiddle = (event) => {
    setMiddle(event.target.value);
    event.preventDefault();
  }
  const handleLast = (event) => {
    setLast(event.target.value);
    event.preventDefault();
  }
  const handleRecordNum = (event) => {
    setRecordNum(event.target.value);
    event.preventDefault();
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value);
    event.preventDefault();
  };

  const handleClinic= (event) => {
    setClinic(event.target.value);
    event.preventDefault();
  };

  const handleLimitationChange = (event) => {
    setLimitation(event.target.value);
    event.preventDefault();
  };

  const handleAllergyChange = (event) => {
    setAllergy(allergy.concat(event.target.innerText, " "));
    event.preventDefault();
  };
  const handleAge = (event) => {
    setAge(age.concat(event.target.innerText, ", "));
    event.preventDefault();
  };

  const handleTransportationChange = (event) => {
    setTransportation(event.target.value);
    event.preventDefault();
  };

  const handleSubmit = event => {
    var temp = db.push({first,last,middle, age, recordNum, clinic, currency, limitation, allergy, transportation});
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
              id="margin-none"
              className={classes.textField}
              label="First Name"
              onChange = {handleFirst}
            />
            <TextField
              id="margin-none"
              className={classes.textField}
              label="Middle Name"
              onChange = {handleMiddle}
            />
            <TextField
              id="margin-none"
              className={classes.textField}
              label="Last Name"
              onChange = {handleLast}
            />
            <TextField id="filled-basic" label="Medical Record Number" onChange = {handleRecordNum}/>

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
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={ages}
              onChange = {handleAge}
              getOptionLabel={(option) => option.label}
              // defaultValue={[top100Films[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Age of each family member"
                  placeholder="Tell us about your age groups"

                />
              )}
            />
            {/* <TextField
              id="standard-select-currency-native"
              select
              label="Age of each family member"
              value={age}
              onChange={handleAgeChange}
              helperText="Please select your age group"
              variant="outlined"
            >
              {ages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
            <TextField
              id="standard-select-currency-native"
              select
              label="Dietary Limitation"
              value={limitation}
              onChange={handleLimitationChange}
              helperText="Please select your dietary limitation"
              variant="outlined"
            >
              {limitations.map((option) => (
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
              getOptionLabel={(option) => option.label}
              // defaultValue={[top100Films[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Allergies"
                  placeholder="Tell us about your allergies"

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
              {transportations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="margin-none"
              className={classes.textField}
              label="Clinic"
              onChange = {handleClinic}
            />
            <div style={{ textAlign: "right", width: "90%" }}>
              <Link to="/order">
                <Button
                  className="next-button"
                  ize="medium"
                  variant="contained"
                  disableRipple
                  color="primary"
                  href="#order"
                  onClick= {handleSubmit}
                  style={{ backgroundColor: "#2F2E40" }}
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
    label: "1",
  },
  {
    value: "TWO",
    label: "2",
  },
  {
    value: "THREE",
    label: "3",
  },
  {
    value: "FOUR",
    label: "4",
  },
  {
    value: "FIVE",
    label: "5",
  },
  {
    value: "SIX",
    label: "6",
  },
];
const limitations = [
  {
    value: "Lactose Intolerance",
    label: "Lactose Intolerance",
  },
  {
    value: "Vegan",
    label: "Vegan",
  },
  {
    value: "PESCETARIAN",
    label: "Pescetarian",
  },
  {
    value: "OVO",
    label: "Ovo-Vegetarian",
  },
  {
    value: "LACTOV",
    label: "Lacto-Vegetarian",
  },
];
const ages = [
  {
    value: "0 - 2",
    label: "0 - 2",
  },
  {
    value: "3 - 18",
    label: "3 - 18",
  },
  {
    value: "19 - 54",
    label: "19 - 54",
  },
  {
    value: "55+",
    label: "55+",
  },
];
const allergies = [
  {
    value: "PEANUT",
    label: "Peanut",
  },
  {
    value: "MILK",
    label: "Milk",
  },
  {
    value: "EGG",
    label: "Egg",
  },
  {
    value: "WHEAT",
    label: "Wheat",
  },
  {
    value: "SOY",
    label: "Soy",
  },
  {
    value: "FISH",
    label: "Fish",
  },
  {
    value: "SHELLFISH",
    label: "Shellfish",
  },
  {
    value: "NONE",
    label: "None",
  },
];

const transportations = [
  {
    value: "CAR",
    label: "Car",
  },
  {
    value: "BUS",
    label: "Bus",
  },
  {
    value: "LIGHT RAIL",
    label: "Light Rail",
  },
  {
    value: "RIDE SHARING",
    label: "Uber or Lyft",
  },
  {
    value: "WALK",
    label: "Walk",
  },
];
export default MultilineTextFields