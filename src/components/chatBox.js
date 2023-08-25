import React, { useEffect, useState } from "react";
import "../App.css";
import Juliusomo from "../images/avatars/juliusomo.png";

const chatBox = () => {
  return (
    <div className="container bg-white py-3 mb-3 rounded shadow-sm row chatBox">
      <img src={Juliusomo} alt="Load again" className="col-lg-1 col-2" />
      <textarea
        className="form-control col float-left textAreaEl"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
      ></textarea>
      <button className="col-lg-1 col-2 btnEl" type="button">
        Send
      </button>
    </div>
  );
};

export default chatBox;
