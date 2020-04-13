import React, { useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../pics/logo.svg";
import LanguageIcon from "@material-ui/icons/Language";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";
import { flexbox } from "@material-ui/system";

export default function NavBar(props) {
  return (
    <Navbar>
      <Nav.Link href="#AboutUs">
        <img src={logo} style={{ width: 140, height: 90 }} />
      </Nav.Link>
      {/* <div flexDirection="row-reverse" justifyContent="flex-end"> */}
      <Link to="/admin">
        <span style={{ color: "#2F2E40" }}>Admin</span>
      </Link>
      <Link
        href="#language"
        color="inherit"
        style={{ marginLeft: "auto", marginRight: "15px" }}
      >
        <LanguageIcon style={{ color: "#2F2E40" }} />
        <span style={{ color: "#2F2E40", marginLeft: "5px" }}>
          English (US)
        </span>
      </Link>
      {props.cart && (
        <Link href="#cart" style={{ color: "#2F2E40" }}>
          {" "}
          <Button
            variant="contained"
            style={{ backgroundColor: "#2F2E4010" }}
            onClick={() => props.handleSubmit()}
          >
            <ShoppingCartIcon />{" "}
            <span style={{ marginLeft: "5px" }}>Submit</span>
          </Button>
        </Link>
      )}
      {/* </div> */}
    </Navbar>
  );
}
