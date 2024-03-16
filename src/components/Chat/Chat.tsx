import { useEffect, useState } from "react";
import Input from "../Input/Input";
import logo from './Avatar User.png'
import { ChatType } from "../styles/common";

const Chat = () => {
  const [messages, setMessages] = useState<ChatType[]>([]);
  const [newMessageOne, setNewMessageOne] = useState("");
  const [newMessageTwo, setNewMessageTwo] = useState("");

  const handleMessageOneChange = (e: any) => {
    setNewMessageOne(e.target.value);
  };

  const handleMessageTwoChange = (e: any) => {
    setNewMessageTwo(e.target.value);
  };

  const sendMessageOne = () => {
    if (newMessageOne.trim() !== "") {
      const updatedMessages = [
        ...messages,
        { id: messages.length + 1, author: "User-1", text: newMessageOne },
      ];
      setMessages(updatedMessages);
      setNewMessageOne("");
      localStorage.setItem("chat", JSON.stringify(updatedMessages));
    }
  };

  const sendMessageSecond = () => {
    if (newMessageTwo.trim() !== "") {
      const updatedMessages = [
        ...messages,
          { id: messages.length + 1, author: "User-2", text: newMessageTwo },
      ];
      setMessages(updatedMessages);
      setNewMessageTwo("");
      localStorage.setItem("chat", JSON.stringify(updatedMessages));
    }
  };

  useEffect(() => {
    const storedMessages = localStorage.getItem("chat");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  return (
    <div className="container">
      <div className="chat-display">
        {messages.map((message) => (
          <div key={message.id} className={message.author === "User-1" ? "left" : "right"}>
            <p style={{display: "flex"}}>
                <img src={logo} alt="" />{message.author}: {message.text}
            </p>
          </div>
        ))}
      </div>
      <div className="messanger-one">
        <Input
          type={"text"}
          placeholder={"write your message here..."}
          value={newMessageOne}
          onChange={handleMessageOneChange}
          width={768}
          height={48}
          border={"1px solid #40414E"}
          background={"#40414E"}
          color={"white"}
          className={"input"}
          onClick={sendMessageOne}
        />
      </div>
      <div className="messanger-two">
        <Input
          type={"text"}
          placeholder={"write your message here..."}
          value={newMessageTwo}
          onChange={handleMessageTwoChange}
          width={768}
          height={48}
          border={"1px solid #40414E"}
          background={"#40414E"}
          color={"white"}
          className={"input"}
          onClick={sendMessageSecond}
        />
      </div>
    </div>
  );
};

export default Chat;
