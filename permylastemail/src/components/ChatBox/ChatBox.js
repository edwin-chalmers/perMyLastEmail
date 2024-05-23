import { useState } from "react";
import { StyledChatBox } from "./ChatBox.styled";
import trainingPrompt from "../../trainingPrompt";
import { getResponse } from "../../apiCalls";

export default function ChatBox({ handleNewMessage, messages, setError }) {
    const [text, setText] = useState('')

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
        <StyledChatBox>
            <textarea
                onInput={autoGrowTextArea}
                value={text}
                maxLength="988"
                onKeyPress={handleKeyPress}
                placeholder={!messages.length ? `Type your message here` : ''}
            ></textarea>
            <button onClick={sendMessage} disabled={!text.trim()}>{`>>`}</button>
        </StyledChatBox>
    )
}