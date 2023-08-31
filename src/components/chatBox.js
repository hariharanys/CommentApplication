import React, { useEffect, useState } from "react";
import "../App.css";
import Juliusomo from "../images/avatars/juliusomo.png";

const chatBox = () => {
  return (
    <>
      <div className="emptyContainer"></div>
      <div className="container chatBox bg-white mb-3 row py-3 shadow-sm rounded">
        <img
          src={Juliusomo}
          alt="Load again"
          className="col-md-1 col-2 align-self-start"
        />
        <div className="col p-0">
          <textarea
            className="form-control"
            id="textChatArea"
            rows="2"
          ></textarea>
        </div>
        <button type="button" className="btnEl">
          Send
        </button>
      </div>
    </>
  );
};

export default chatBox;
