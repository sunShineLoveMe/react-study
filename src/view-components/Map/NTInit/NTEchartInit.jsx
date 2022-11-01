import * as echarts from 'echarts'
import React, { useEffect, useRef } from 'react'
import nantong from '../data/jsons/nantong.json'
// import guangdong from '../data/jsons/guangdong.json'

export default function GDEchartInit(props) {

    const { options } = props
    const curRef = useRef(null)
    let echart = null

    const initEcharts = () => {
        console.log(nantong)
        // console.log(guangdong)
        echarts.registerMap('NT', nantong)
        echart = echarts.init(curRef.current)
        window.addEventListener('resize', handleResize)
        options && echart.setOption(options)
        echart.resize()
    }

    const handleResize = () => {
        try {
            echart.resize();
        } catch (error) {

        }
    }

    useEffect(() => {
        initEcharts()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div ref={curRef} style={{ width: "100%", height: "100%", position: "relative" }} id="map"></div>
    )
}
