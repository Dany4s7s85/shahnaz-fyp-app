import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./food.css";
import axios from "axios";

function Food() {
  const history = useHistory();
  const [response, setresponse] = useState("");
  const [userValues, setUserValue] = useState({
    name: "",
    cell: "",
    address: "",
    dish: "",
    weight: "",
    date: "",
  });

  function HandleInput(e) {
    setUserValue({ ...userValues, [e.target.name]: e.target.value });
  }

  function SubmitData() {
    axios
      .post("/food", userValues)
      .then((res) => {
        if (res.data) {
          setresponse(res.data);
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        setresponse("oops! 500 server error");
      });
  }
  return (
    <div>
      <div className="navDiv">
        <Link to="/" className="customLink">
          Home
        </Link>
        <Link to="/aboutus" className="customLink">
          About
        </Link>
        <Link to="/features" className="customLink">
          Features
        </Link>
        <Link to="/room" className="customLink">
          Room-Order
        </Link>
        <Link to="/food" className="customLink">
          Food-Order
        </Link>
        <Link to="/detail" className="customLink">
          Order-Detail
        </Link>
      </div>
      <div className="FoodMainDiv">
        <div>
          <h1 className="text-center text-white">Order Food</h1>
          <input
            onChange={HandleInput}
            value={userValues.name}
            name="name"
            type="text"
            placeholder="Your Name"
          />
          <input
            onChange={HandleInput}
            value={userValues.cell}
            name="cell"
            type="text"
            placeholder="Your Phone Number"
          />
          <input
            onChange={HandleInput}
            value={userValues.address}
            name="address"
            type="text"
            placeholder="Your Physical Address"
          />
          <input
            onChange={HandleInput}
            value={userValues.dish}
            name="dish"
            type="text"
            placeholder="Dish Name"
          />
          <input
            onChange={HandleInput}
            value={userValues.weight}
            name="weight"
            type="text"
            placeholder="Weight"
          />
          <input
            onChange={HandleInput}
            value={userValues.date}
            name="date"
            type="text"
            placeholder="Delivery Date"
          />
          <p className="text-danger h1">{response}</p>
          <button onClick={SubmitData}>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Food;
