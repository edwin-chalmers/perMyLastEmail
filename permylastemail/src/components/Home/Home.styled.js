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

    h1 {
        font-weight: 800;
        margin: 5px;
    }
`