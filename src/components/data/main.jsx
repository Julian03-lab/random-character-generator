import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/card";
import "./main.css";

const Data = (props) => {
  const [users, setUsers] = useState([]);
  const [color, setColor] = useState("");

  const randomColor = () => {
    const colours = ["#13d59e", "#ea2", "#a1da9e" ,"#d4a4d3","#89903a","#61a1d3","#4762bb","#c932b7","#6056af","#f04474","#de0041","#4f3840","#dea0d9","#398394","#c3f6d9","#cec4f0","#b989c5","#f0f32e","#bb7a12","#ca652c"];
    return colours[Math.floor(Math.random() * colours.length)];
  };

  const GetData = async () => {
    await axios
      .get("https://random-data-api.com/api/v2/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    GetData();
    setColor(randomColor());
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-4 gap-lg-5 vh-100 p-4" style={{backgroundColor: color}}>
       <h1 id="page-title">Random Data Generator</h1>
      <Card
        avatar={users.avatar}
        name={users.first_name}
        lastname={users.last_name}
        birth={users.date_of_birth}
        email={users.email}
        gender={users.gender}
        color = {color}
      />
      <button
        onClick={() => {
          GetData();
          setColor(randomColor());
        }}
      >
        Get Random Data
      </button>
    </div>
  );
};

export default Data;
