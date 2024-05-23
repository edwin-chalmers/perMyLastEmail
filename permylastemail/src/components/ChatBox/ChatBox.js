import { useState } from "react";
import { StyledChatBox } from "./ChatBox.styled";
import trainingPrompt from "../../trainingPrompt";
import { getResponse } from "../../apiCalls";

export default function ChatBox({ handleNewMessage, messages, setError, text, setText, sendMessage }) {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            sendMessage()
        }
    }

    const autoGrowTextArea = (event) => {
        setText(event.target.value)
        event.target.style.height = 'auto'
        event.target.style.height = `${event.target.scrollHeight}px`
    }

    const userMessages = messages.filter(msg => msg.role === "user");
    const mostRecentUserMessage = userMessages.length > 0 ? userMessages[userMessages.length - 1].content : '';

    return (
        <StyledChatBox>
            <textarea
                onInput={autoGrowTextArea}
                value={text}
                maxLength="988"
                onKeyPress={handleKeyPress}
                placeholder={mostRecentUserMessage || "Type your message here..."}
            ></textarea>
        </StyledChatBox>
    )
}