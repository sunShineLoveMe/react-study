import styled from "styled-components";

export const MainContainer = styled.div`
    .main_box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        background: #666666;
        border: 1px solid red;
        padding: auto;
        position: relative;
    }
`

export const HideScrollBar = styled.div`
    position: absolute;
    height: 200px;
    width: 20px;
    background-color: #fff;
    right: 0;
    z-index: 999;
    top: 226px;
`