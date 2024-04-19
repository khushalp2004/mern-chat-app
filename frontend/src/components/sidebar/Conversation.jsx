import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const Conversation = ({ conversation, lastIdx}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = conversation && selectedConversation?._id === conversation._id;
  const {onlineUsers}=useSocketContext();
  const isOnline=onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline? "online": ""}`}>
          <div className="w-12 rounded-full">
            {conversation && conversation.profilePic && (
              <img
                src={conversation.profilePic}
                alt="user-avatar"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-10">
              {conversation && conversation.fullname}
            </p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h1" />}
    </>
  );
};

export default Conversation;