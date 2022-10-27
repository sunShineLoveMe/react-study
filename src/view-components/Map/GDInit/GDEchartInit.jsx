import * as echarts from 'echarts'
import React, { useEffect, useRef } from 'react'
import 'echarts/map/js/china'
import 'echarts/map/js/province/guangdong.js'
import guangdong from '../guangdong.json'
// import guangdong from 'echarts/map/json/province/guangdong.json'
// import { provienceData} from "../option"

export default function GDEchartInit(props) {

    const { options } = props
    const curRef = useRef(null)
    let echart = null

    const initEcharts = () => {
        console.log(guangdong)
        // echarts.registerMap(sourceName, { geoJSON: mapData})
        echarts.registerMap('GD', guangdong)
        // echart = echarts.init(curRef.current)
        echart = echarts.init(document.getElementById('map'))
        window.addEventListener('resize', handleResize)
        console.log(options);
        options && echart.setOption(options)
        echart.resize()
    }

    // echart.on('click', function (params) {
    //     for (let i = 0; i < provienceData.length; i++) {
    //         provienceData[i].value = 0
    //         if (params.name === provienceData[i].name && _this.state.departName !== params.data.name) {
    //             provienceData[i].value = 5
    //         }
    //     }

    //     echart.setOption(options);
    // });

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
