import React from 'react'
import { MainContainer } from './style'

// import Header from '../Header/Header'
// import EchartMap from '../Map/EchartMap'
import GDEchartMap from '../Map/GDEchartMap'

export default function Container() {
  return (
    <MainContainer>
        <div className='main_box'>
          <GDEchartMap />
        </div>
    </MainContainer>
  )
}
