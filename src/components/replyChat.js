/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import "../App.css";
import Ramsesmiron from "../images/avatars/ramsesmiron.png";
import Reply from "../images/icons/icon-reply.svg";

const replyChatCard = (props) => {
  const replies = props.ReplyData;
  return (
    <div className="container row">
      <div className="col-1 line-container"></div>

      <div className="col-10">
        <div className="col-12 row bg-white py-3 my-3 rounded shadow-sm">
          <div className="increment-container py-1">
            <p className="nopadding">+</p>
            <p className="nopadding">{replies.score}</p>
            <p className="nopadding">-</p>
          </div>

          <div className="col-11 row">
            <div className="col-12 row align-items-start">
              <div className="col-8">
                <img
                  src={Ramsesmiron}
                  alt="Load again"
                  className="avatar-contaier float-left"
                />
                <p className="float-left profile-detail">
                  {replies.user.username}
                </p>
                <p className="float-left profile-detail">{replies.createdAt}</p>
              </div>
              <div className="col-4">
                <div className="replyContainer">
                  <img src={Reply} alt="load again" />
                  <p>Reply</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p className="chat-detail">
                <span className="mention-username">@{replies.replyingTo}</span>
                &nbsp;
                {replies.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default replyChatCard;
