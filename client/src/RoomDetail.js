import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DetailHead from "./DetailHead";

function Room() {
  const [tabledata, settabledata] = useState([]);
  const [iddelete, setdelete] = useState({ id: "" });
  const [iddeliver, setdeliver] = useState({ id: "" });
  const [response, setresponse] = useState("");

  function SetId(e) {
    const name = e.target.name;
    const value = e.target.value;
    setdelete({ ...iddelete, [name]: value });
  }

  function SetId2(e) {
    const name = e.target.name;
    const value = e.target.value;
    setdeliver({ ...iddeliver, [name]: value });
  }

  function DeleteOrder() {
    axios
      .post("/roomdelete", iddelete)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        setresponse("oops!: 500 server error");
      });
  }

  function DeliveredOrder() {
    axios
      .post("/roomdeliver", iddeliver)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        setresponse("oops!: 500 server error");
      });
  }

  function ExecuteTable(data) {
    return (
      <tr>
        <td>{data._id}</td>
        <td>{data.name}</td>
        <td>{data.cell}</td>
        <td>{data.type}</td>
        <td>{data.people}</td>
        <td>{data.sdate}</td>
        <td>{data.edate}</td>
        <td>{data.status}</td>
      </tr>
    );
  }

  function getDBdata() {
    axios
      .get("/roomdata")
      .then((response) => {
        const alldata = response.data;
        settabledata(alldata);
      })
      .catch(() => {
        console.log("error occured");
      });
  }

  useEffect(() => {
    getDBdata();
  }, []);

  return (
    <div>
      <DetailHead />
      <p className="text-center p-5 text-danger h2">{response}</p>
      <div className="MainDivInputDetial">
        <div>
          <input onChange={SetId} placeholder="Enter Order Id" name="id" />
          <button onClick={DeleteOrder} className="bg-danger">
            Cancel-Order
          </button>
          <input onChange={SetId2} placeholder="Enter Order Id" name="id" />
          <button onClick={DeliveredOrder} className="bg-success">
            Delivered-Order
          </button>
        </div>
      </div>

      <div className="mainDetailBodyDiv">
        <div className="childDetailBodyDiv">
          <table>
            <tr>
              <th>Order-ID</th>
              <th>Name</th>
              <th>Cell</th>
              <th>Room-Type</th>
              <th>Number-of-people</th>
              <th>Start-Date</th>
              <th>End-Date</th>
              <th>Status</th>
            </tr>
            {tabledata.map(ExecuteTable)}
          </table>
        </div>
      </div>
    </div>
  );
}
export default Room;
