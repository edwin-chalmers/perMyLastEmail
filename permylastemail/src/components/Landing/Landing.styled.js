import styled from "styled-components";

export const StyledLanding = styled.div`
    --main-color: #de548e;
    --secondary-color: #faaadb;
    --background-color: #fcd4f8;

    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    background-color: #fcd4f8;
    color: var(--main-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--background-color)

    h1 {
        font-size: larger;
    }

    div {
        margin-left: 30px;
    }

    p {
        max-width: 600px;
        margin: 15px 30px;
    }

    #stepForward {
        margin: 20px;
        border: none;
        padding: 6px 12px;
        border-radius: 6px;
        text-decoration: none;
        color: var(--background-color);
        background-color: var(--secondary-color);
        font-size: small;

        &:hover {
            background-color: var(--main-color);
        }
    }
`