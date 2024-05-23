import styled from "styled-components";

export const StyledChatBox = styled.div`
    --main-color: #de548e;
    --secondary-color: #faaadb;
    --background-color: #fcd4f8;

    width: 100%;        // Make it fill the container
    max-width: 800px;   // But not more than 800px
    min-height: 50px;
    max-height: 200px;
    border: 2px solid var(--secondary-color);
    box-sizing: border-box;
    background-color: rgba(0,0,0,0);
    margin-bottom: 20px ;
    border-radius: 15px;
    padding-left: 10px;
    
    display: flex;
    align-items: center;
    justify-content: right;

    textarea {
        box-sizing: border-box;
        background-color: rgba(0,0,0,0);
        width: 100%;
        border: none;
        color: var(--main-color);
        resize: none;
        outline: none;
        padding: 14px 0 0 10px;
    }

    ::placeholder {
        color: var(--secondary-color);
    }

    &:focus-within {
        border-color: var(--main-color);
        
        ::placeholder {
        color: var(--main-color);
    }
    }

    button {
        width: 35px;
        height: 35px;
        background-color: rgba(0,0,0,0);
        border: 1px solid var(--secondary-color);
        border-radius: 12px;
        margin-right: 10px;
        color: var(--background-color);
        background-color: var(--secondary-color);
        font-weight: 800;

        background-color: ${props => props.disabled ? 'var(--secondary-color)' : 'var(--main-color)'};
        cursor: ${props => props.disabled ? '' : 'pointer'}
    }
`