import styled from "styled-components";

export const StyledChatLog = styled.div`
    --main-color: #de548e;
    --secondary-color: #faaadb;
    --background-color: #fcd4f8;

    width: 500px;
    height: 300px;
    flex-grow: 1;
    overflow-y: none;
    border: 2px solid var(--secondary-color);
    border-radius: 15px;

    .chat-message {
        display: flex;
        align-items: center;
        padding: 0 50px;
    }

    img {
        width: 30px;
        margin: 0 20px 0 0;
    }
`