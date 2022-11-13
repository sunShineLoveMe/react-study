import React, { useEffect } from 'react'
import ReactTooltip from 'react-tooltip'
import { MainContainer, HideScrollBar } from './style'
import BootstrapExample from '../bootstrapExample'
import { getGroupTransferQuantitySummaryByRegisterRegion } from '../../api/collect/index'

// import Header from '../Header/Header'
// import EchartMap from '../Map/EchartMap'
// import GDEchartMap from '../Map/GDEchartMap'
// import NTEchartMap from '../Map/NTEchartMap'
import ScrollTable from '../ScrollTable/index'
import ScrollItem from '../scrollItem/index'
import TimerDemo from '../TimerDemo'
import Page from '../Page'
import { useState } from 'react'
import OverlayTrigger from '../overlayTrigger/index'

import ScrollList from '../scrollList/index'
import TestScroll from '../TestScroll/index'
import Tooltips from '../Tooltips'
import ScrollTipItem from '../scrollTipItem'

export default function Container() {

  const dataSource = [];

  for (let i = 0; i < 12; i++) {
    dataSource.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const [count, setCount] = useState()

  const [show, setShow] = useState(false)

  const handleScrollItem = () => {
    getGroupTransferQuantitySummaryByRegisterRegion().then(res => {
      console.log(res);
      if(res.success) {
        setShow(true)
        setCount(res.obj.length)
      }
    })
  }

  // useEffect(() => {
  //     ReactTooltip.rebuild()
  // })

  return (
    <MainContainer>
        <div className='main_box' 
          style={{width: '300px', border: '1px solid red', cursor: "pointer" }}>
            <BootstrapExample></BootstrapExample>
          {/* <HideScrollBar></HideScrollBar> */}
          {/* <ScrollTable columns={columns} dataSource={dataSource} scroll={{ y: 300 }} /> */}

          {/* <TimerDemo></TimerDemo> */} 
{/* 
          <h1>{show}</h1>
          <button onClick={e => setShow(!show)}>切换状态</button>
          {show && <Page />} */}

          {/* <ScrollList column={columns} data={dataSource}></ScrollList>
           */}

           {/* <TestScroll></TestScroll> */}
           {/* <ReactTooltip id="foo" /> */}
           {/* <Tooltips/> */}
           {/* 点击
           { show ? <ScrollTipItem count = {count} /> : null } */}


           
           {/* <OverlayTrigger></OverlayTrigger> */}
        </div>
    </MainContainer>
  )
}
