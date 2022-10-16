import styled from 'styled-components'

// 样式传参
export const HeaderContainer = styled.div`
    width: 100%;
    height: ${props => props.height};
    line-height: ${props => props.height};
    background: ${props => props.color};
`
export const SearchInput = styled.input.attrs(props => ({
    type: 'text',
    value: props.placeHolderVal
}))`
    width: 100px;
    height: 100px;
    padding: 40px;
`
export const BtnOne = styled.button`
    width: 100px;
    height: 8rem;
    line-height: 8rem;
    margin: 0 .2rem;
    background: red;
    border: none;
    color: #fff;
`

export const BtnTwo = styled(BtnOne)`
    background: blue;
`