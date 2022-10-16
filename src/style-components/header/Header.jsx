import React, { useState } from 'react'
import { BtnOne, BtnTwo, HeaderContainer, SearchInput } from './style'

export default function Header() {

    // useState方式进行状态变量的传值
    const [headerBackground, setHeaderBackground] = useState('green')
    const [headerHeight, setHeaderHeight] = useState('10rem')
    const [placeHolderVal, setPlaceHolderVal] = useState('请输入....')


    return (
        <HeaderContainer color={headerBackground} height={headerHeight}>
            {/* <SearchInput placeHolderVal={placeHolderVal} onChange={() => {}}></SearchInput> */}
            <BtnOne>原按钮</BtnOne>
            <BtnTwo>继承按钮</BtnTwo>
        </HeaderContainer>
    )
}
