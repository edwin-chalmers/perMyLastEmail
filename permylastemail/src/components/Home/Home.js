import { StyledHome } from "./Home.styled";
import ChatLog from "../ChatLog/ChatLog";
import ChatBox from "../ChatBox/ChatBox";
import trainingPrompt from "../../trainingPrompt";
import { getResponse } from "../../apiCalls";

import { useState, useEffect } from "react"

export default function Home() {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const handleNewMessage = (newMessage) => {
        setMessages(prevMessages => [...prevMessages, newMessage])
    };

    useEffect(() => {
        messages.length >= 50 && setMessages(messages.splice(0, 2))
    }, [messages])
    
    const sendMessage = async () => {
        if (text.trim()) {
            try {
                handleNewMessage({ content: text, role: "user" })
                setText('')
                const apiResponse = await getResponse([...messages, { "role": "system", "content": `${trainingPrompt}` }, { "content": text, "role": "user" }])

                if (apiResponse) {
                    handleNewMessage({ "content": apiResponse.choices[0].message.content, "role": "assistant" })
                }

            } catch (error) {
                setError(true)
                console.error('Failed to send message:', error)
            }
        }
    }


    return (
        <StyledHome className="home">
            <h1>PERMYLASTEMAIL</h1>
            <div>
                <ChatBox 
                    handleNewMessage={handleNewMessage} 
                    messages={messages} 
                    setError={setError}
                    text={text}
                    setText={setText}
                    sendMessage={sendMessage}
                />  
                <button onClick={sendMessage} disabled={!text.trim()}>{`>>`}</button>
                <ChatLog messages={messages}/>
            </div>
        </StyledHome>
    )
}