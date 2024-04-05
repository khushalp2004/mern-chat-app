import Message from "../models/messagemodel.js";
import Conversation from "../models/conversationmodel.js";

export const sendMessage=async(req,res)=>{
    try{
        const {message}=req.body;
        const {id: receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{
                $all: [senderId,receiverId]
            },
        })

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        });

        ////SOCKETIO functionality will go here for making the chat realtime

        if(newMessage){
            conversation.messages.push(newMessage._id)
        } /////here we created the conversation but didn't save it so use save function....
        // await conversation.save();///saving the conversation between two ids
        // await newMessage.save();////save the messages
        ///this method of saving seperately will cause more time complexity to store for example 2 sec for saving
        ///to optimize this code for saving   use Promise\
        //But using promise both saving will be done parallely causing faster response time saving the time
        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(201).json(newMessage);

    }catch(error){
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

export const getMessages=async(req,res)=>{
    try{
        const {id: userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages"); ///Not getting just REFERENCE but ACTUAL MESSAGES..... 

        if(!conversation)
            return res.status(200).json([]);

        const messages=conversation.messages;

        res.status(200).json(conversation.messages);
    
    }catch(error){
        console.log("Error in getMessages controller: ",error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}
