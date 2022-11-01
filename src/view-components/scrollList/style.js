import styled from "styled-components"

export const ContainerBox = styled.div`
    .scroll-list {
        overflow: hidden;
        height: calc(50vh - 200px);
        .list-content {
            width: 100%;
            ul {
                height: 30px;
                line-height: 30px;
                display: flex;
            }
            li {
                flex: 1;
                border: 1px solid pink;
            }
    }
}
`