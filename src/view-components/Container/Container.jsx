import React from 'react'
import { MainContainer } from './style'

// import Header from '../Header/Header'
import EchartMap from '../Map/EchartMap'

export default function Container() {
  return (
    <MainContainer>
        <div className='main_box'>
          <EchartMap />
        </div>
    </MainContainer>
  )
}
