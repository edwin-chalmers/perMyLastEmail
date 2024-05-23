import styled from "styled-components";

export const StyledChatLog = styled.div`
    width: 100%;
    max-width: 820px;
    height: 70vh;
    flex-grow: 1;
    overflow-y: auto;
    /* background-color: #ffc9fa; */

    .chat-message {
        display: flex;
        align-items: flex-start;
        padding-right: 20px;
    }

    img {
        width: 30px;
        margin: 10px 10px 0 0;
    }
`