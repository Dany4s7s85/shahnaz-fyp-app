import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DetailHead from "./DetailHead";
import axios from "axios";

function Detail() {
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
      .post("/fooddelete", iddelete)
      .then((res) => {
        window.location.reload(true);
      })
      .catch((err) => {
        setresponse("oops!: 500 server error");
      });
  }

  function DeliveredOrder() {
    axios
      .post("/fooddeliver", iddeliver)
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
        <td>{data.address}</td>
        <td>{data.dish}</td>
        <td>{data.weight}</td>
        <td>{data.date}</td>
        <td>{data.status}</td>
      </tr>
    );
  }

  function getDBdata() {
    axios
      .get("/fooddata")
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
          <div className="linkDiv">
            <table>
              <tr>
                <th>Order-ID</th>
                <th>Name</th>
                <th>Cell</th>
                <th>Address</th>
                <th>Dish</th>
                <th>Weight</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
              {tabledata.map(ExecuteTable)}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
