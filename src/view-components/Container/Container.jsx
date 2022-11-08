import React from 'react'
import { MainContainer, HideScrollBar } from './style'

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

export default function Container() {

  const [show, setShow] = useState(true)

  const columns = [
    {
      title: 'Name',
      dataIndex: '未处理',
    },
    {
      title: 'Age',
      dataIndex: '已处理',
    },
    {
      title: 'Address',
      dataIndex: '',
    }
  ];

  const dataSource = [];

  for (let i = 0; i < 12; i++) {
    dataSource.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <MainContainer>
        <div className='main_box' style={{width: '300px'}}>
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
           {/* <Tooltips></Tooltips> */}
           <OverlayTrigger></OverlayTrigger>
        </div>
    </MainContainer>
  )
}
