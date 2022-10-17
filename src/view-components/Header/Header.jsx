import React from 'react'
import {DatavTest} from './style'
import { 
    BorderBox1, 
    BorderBox13, 
    Decoration7, 
    Decoration9, 
    Charts, 
    ActiveRingChart, 
    ConicalColumnChart,
    FlylineChartEnhanced
  } from '@jiaminghi/data-view-react'
import { gaugeOpt, activeOpt, conicalOpt, flylineMapOpt } from './option'

export default function Header() {
  return (
    <DatavTest>
        <div className='main_header'>
          {/* 边框 */}
          <BorderBox1 className="main_border">BorderBox1</BorderBox1>
          <BorderBox13 className="main_border">BorderBox13</BorderBox13>

          <Decoration7 className="main_decoration">Decoration</Decoration7>
          <Decoration9 className="main_decoration9">99%</Decoration9>

          <Charts className="main_gauge" option={gaugeOpt} />
          
          <ActiveRingChart className="main_active_chart" config={activeOpt} />

          <ConicalColumnChart config={conicalOpt} style={{width: '400px', height: '200px'}} />

          <div className='main_map'>
            <FlylineChartEnhanced config={flylineMapOpt} style={{width: '100%', height: '100%'}} />
          </div>
        </div>
    </DatavTest>
  )
}
