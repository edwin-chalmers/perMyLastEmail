import { StyledHome } from "./Home.styled";
import ChatLog from "../ChatLog/ChatLog";
import ChatBox from "../ChatBox/ChatBox";

import { useState, useEffect } from "react"

export default function Home() {
    const [messages, setMessages] = useState([])
    const [error, setError] = useState(false)

    const handleNewMessage = (newMessage) => {
        setMessages(prevMessages => [...prevMessages, newMessage])
    };

    useEffect(() => {
        messages.length >= 50 && setMessages(messages.splice(0, 2))
    }, [messages])
    

    return (
        <StyledHome className="home">
            <h1>PERMYLASTEMAIL</h1>
            <ChatLog messages={messages}/>
            <ChatBox 
                handleNewMessage={handleNewMessage} 
                messages={messages} 
                setError={setError}
            />
        </StyledHome>
    )
}