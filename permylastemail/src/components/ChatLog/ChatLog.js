import { useRef, useEffect } from "react";
import { StyledChatLog } from "./ChatLog.styled";
import showdown from "showdown";

export default function ChatLog({ messages }) {
    const converter = new showdown.Converter()
    const endOfMessagesRef = useRef(null)

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <StyledChatLog>
            {messages
                .filter(msg => msg.role === "assistant")
                .slice(-1)
                .map((msg, index) => {
                    const htmlContent = converter.makeHtml(msg.content);
                    return (
                        <div key={index} className="chat-message">
                            <div className="message" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                        </div>
                    );
                })}
            <div ref={endOfMessagesRef} />
        </StyledChatLog>
    )
}