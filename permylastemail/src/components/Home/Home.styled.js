import styled from "styled-components";

export const StyledHome = styled.div`
    --main-color: #de548e;
    --secondary-color: #faaadb;
    --background-color: #fcd4f8;

    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);
    color: var(--main-color);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 800;
        margin: 5px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button {
        width: 35px;
        height: 35px;
        background-color: rgba(0,0,0,0);
        border: 1px solid var(--secondary-color);
        border-radius: 12px;
        margin: 20px;
        color: var(--background-color);
        background-color: var(--secondary-color);
        font-weight: 800;

        background-color: ${props => props.disabled ? 'var(--secondary-color)' : 'var(--main-color)'};
        cursor: ${props => props.disabled ? '' : 'pointer'}
    }
`