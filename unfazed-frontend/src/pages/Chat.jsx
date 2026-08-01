import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("https://unfazed-backend.onrender.com");

function Chat() {

  const [message,setMessage]=useState("");
  const [messages,setMessages]=useState([]);

  useEffect(()=>{

    socket.on("receive_message", (data) => {
  console.log("Received:", data);
  setMessages((prev) => [...prev, data]);
});

    return()=>socket.off("receive_message");

  },[]);

  const sendMessage=()=>{

    if(message==="") return;

    console.log("Sending:", message);
socket.emit("send_message", message);

    setMessage("");

  };

  return(

<div className="container py-5">

<div className="card shadow p-4">

<h2 className="text-center mb-4">
💬 Therapist Chat
</h2>

<div
style={{
height:"350px",
overflowY:"auto",
border:"1px solid #ddd",
padding:"15px",
borderRadius:"10px",
marginBottom:"20px"
}}
>

{messages.map((msg,index)=>(

<div
key={index}
className="alert alert-primary"
>
{msg}
</div>

))}

</div>

<input
className="form-control mb-3"
placeholder="Type your message..."
value={message}
onChange={(e)=>setMessage(e.target.value)}
/>

<button
className="btn btn-primary"
onClick={sendMessage}
>
Send
</button>

</div>

</div>

  );

}

export default Chat;