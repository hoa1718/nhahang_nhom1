import "./Ban.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Ban(props) {
  const [soBan, setSoBan] = useState(props.props);
  const displayBan = () => {
    for (let i = 1; i <= Number(soBan); i++) {
        console.log(i);
      return (
        <div className="col-lg-3 dining">
          <div className="dining-inner"></div>
          <img
            src={process.env.PUBLIC_URL + "/restaurant.png"}
            alt="table"
          ></img>   
          <p>Bàn {soBan}</p>
        </div>
      );
    }
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="row">
          {displayBan()}
        </div>
      </div>
    </div>
  );
}
export default Ban;