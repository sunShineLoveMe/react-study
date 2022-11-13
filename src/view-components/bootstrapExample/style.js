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
        width: 18%;
    }
`

export const PopOverContent = styled.div`
    .pop-over-content-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 25px;
        line-height: 25px;
        text-align: left;
        border-bottom: 1px solid #29304D;
        padding-bottom: 2px;
        .pop-over-content-item {
            display: inline-block;
            color: #fff;
            font-size: 10px;
            padding: 0 4px;
            width: 18%;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
`