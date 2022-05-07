import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./room.css";

function Room() {
  const history = useHistory();
  const [response, setresponse] = useState("");
  const [userValues, setUserValue] = useState({
    name: "",
    cell: "",
    people: "",
    type: "",
    sdate: "",
    edate: "",
  });

  function HandleInput(e) {
    setUserValue({ ...userValues, [e.target.name]: e.target.value });
  }

  function SubmitData() {
    axios
      .post("/room", userValues)
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
      <div className="RoomMainDiv">
        <div>
          <h1 className="text-center">Room Booling</h1>
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
            placeholder="Cell Number"
          />
          <input
            onChange={HandleInput}
            value={userValues.people}
            name="people"
            type="text"
            placeholder="Number of People"
          />
          <input
            onChange={HandleInput}
            value={userValues.type}
            name="type"
            type="text"
            placeholder="Type of Room"
          />
          <input
            onChange={HandleInput}
            value={userValues.sdate}
            name="sdate"
            type="text"
            placeholder="Start Date"
          />
          <input
            onChange={HandleInput}
            value={userValues.edate}
            name="edate"
            type="text"
            placeholder="End Date"
          />
          <p className="text-danger h1">{response}</p>
          <button onClick={SubmitData}>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default Room;
