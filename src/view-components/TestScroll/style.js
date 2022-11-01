import styled from "styled-components"

export const PopOverTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 20px;
    .pop-over-title-item {
        display: inline-block;
        color: #fff;
        font-size: 10px;
        padding: 0 4px;
        text-align: center;
        /* border: 1px solid #fff; */
    }
`

export const PopOverContent = styled.div`
    .pop-over-content-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 20px;
        line-height: 20px;
        text-align: left;
        border-bottom: 1px solid #29304D;
        .pop-over-content-item {
            display: inline-block;
            color: #fff;
            font-size: 10px;
            padding: 0 4px;
            text-align: center;
            text-align: left;
        }
    }
    
`