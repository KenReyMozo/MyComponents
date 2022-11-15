import React, { useEffect, useState } from 'react';
import { useChannel } from "./AblyReactEffect";
import styles from './AblyChatComponent.module.css';

const AblyChatComponent = () => {

    let inputBox = null;
    let messageEnd = null;

    const [messageText, setMessageText] = useState("");
    const [receivedMessages, setMessages] = useState([]);
    const messageTextIsEmpty = messageText.trim().length === 0;

    const [userName, setUserName] = useState("")

    const [channel, ably] = useChannel("chat-demo", (message) => {
        // Here we're computing the state that'll be drawn into the message history
        // We do that by slicing the last 199 messages from the receivedMessages buffer
      
        console.log("hhmm")
        const history = receivedMessages.slice(-199);
        setMessages([...history, message]);
        messageEnd.scrollTop = messageEnd.scrollHeight;
        // Then finally, we take the message history, and combine it with the new message
        // This means we'll always have up to 199 message + 1 new message, stored using the
        // setMessages react useState hook
      });

      const sendChatMessage = (messageText) => {
        channel.publish({ name: "chat-message", data: messageText });
        setMessageText("");
        inputBox.focus();
      }

      const handleFormSubmission = (e) => {
        e.preventDefault();
        const addName = userName ? `${userName} :` : ""
        const newMessage = `${addName} ${messageText}`
        sendChatMessage(newMessage);
      }

      const handleKeyPress = (e) => {
        if (e.charCode !== 13 || messageTextIsEmpty) {
          return;
        }
        const addName = userName ? `${userName} :` : ""
        const newMessage = `${addName} ${messageText}`
        sendChatMessage(newMessage);
        e.preventDefault();
      }

      const messages = receivedMessages.map((message, index) => {
        const author = message.connectionId === ably.connection.id ? "me" : "other";
        return <div key={index}>
            <span className={styles.message} data-author={author}>{message.data}</span>
            </div>;
      });

    //   useEffect(() => {
    //     window.scrollTo({
	// 		top: messageEnd.offsetTop,
	// 		behavior: "smooth"
	// 	})
    //   });

      return (
        <div className={styles.chatHolder}>
          <div ref={(element) => { messageEnd = element; }}
          className={styles.chatText}>
            {messages}
          </div>
          <form onSubmit={handleFormSubmission} className={styles.form}>
            
            <textarea
              ref={(element) => { inputBox = element; }}
              value={messageText}
              placeholder="Type a message..."
              onChange={e => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
              className={styles.textarea}
            ></textarea><br/>
            Your Name :<br/>
            <input value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
            <br/>
            <button type="submit" className={styles.button} disabled={messageTextIsEmpty}>Send</button>
          </form>
        </div>
      )
    }
    
    export default AblyChatComponent;