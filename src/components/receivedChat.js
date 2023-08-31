import React, { useEffect, useState } from "react";
import "../App.css";
import Amyrobson from "../images/avatars/amyrobson.png";
import Reply from "../images/icons/icon-reply.svg";
import ReplyChatCard from "./replyChat";

const receivedChat = (props) => {
  const userData = props.userData;

  const increLike = (e) => {
    console.log(e);
  };

  const decreLike = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="container bg-white py-3 mb-3 rounded shadow-sm row">
        <div className="increment-container py-1">
          <p className="nopadding likeEl" onClick={increLike}>
            +
          </p>
          <p className="nopadding">{userData.score}</p>
          <p className="nopadding likeEl" onClick={decreLike}>
            -
          </p>
        </div>

        <div className="col-11 row">
          <div className="col-12 row">
            <div className="col-8">
              <img
                src={Amyrobson}
                alt="Load again"
                className="avatar-contaier float-left"
              />
              <p className="float-left profile-detail">
                {userData.user.username}
              </p>
              <p className="float-left profile-detail">{userData.createdAt}</p>
            </div>
            <div className="col-4">
              <div className="replyContainer">
                <img src={Reply} alt="load again" />
                <p>Reply</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="chat-detail">{userData.content}</p>
          </div>
        </div>
      </div>
      {userData.replies.length === 0 ? (
        <div></div>
      ) : (
        userData.replies.map((reply) => <ReplyChatCard ReplyData={reply} />)
      )}
    </>
  );
};
export default receivedChat;
