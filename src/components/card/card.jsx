import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="d-flex flex-column avatar p-2 p-lg-3 justify-content-center align-items-center">
      <div className="card-avatar" style={{backgroundColor: props.color}}>
        <img src={props.avatar} alt="" className="img-fluid"/>
      </div>
      <div className="card-body d-flex flex-column align-items-center text-center gap-1">
        <div className="card-name p-1">
          <div className="name">{props.name}</div>
          <div className="last-name">{props.lastname}</div>
        </div>
        <div className="card-info py-2 p-md-3">
          <div className="birth title">
            <div className="subtitle">Birth</div>
            {props.birth}
          </div>
          <div className="email title">
            <div className="subtitle">Email</div>
            {props.email}
          </div>
          <div className="gender title">
            <div className="subtitle">Gender</div>
            {props.gender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
