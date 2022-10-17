import React from 'react'
import { MainContainer } from './style'

import Header from '../Header/Header'

export default function Container() {
  return (
    <MainContainer>
        <div className='main_box'>
          <Header />
        </div>
    </MainContainer>
  )
}
