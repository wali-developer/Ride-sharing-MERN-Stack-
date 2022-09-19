import React from "react";
import { format } from "timeago.js";

const Message = () => {
  return (
    <>
      <div className="messagesList">
        <div
          className={"singleMessage"}
        >
          <div className="row singleMessageRow d-flex align-items-start">
            <div className="col-2 my-2">
              <img
                src="/images/user-icon.png"
                className="user-icon img-fluid "
                alt="user"
              />
            </div>
            <div
              className={
                "message-text col-md-10"
              }
            // id={ownMessage ? "ownMessageText" : ""}
            >
              <span>Hello</span>
            </div>
          </div>
          <div className="messager-details d-flex flex-row justify-content-between">
            <div className="messagerName">
              {/* {ownMessage ? OwnUser.fullName : ConnectedRider.fullName} */}
              Hammad Khan
            </div>
            <div className="messageDate">{"2 days ago"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
