import * as echarts from 'echarts'
import React, { useEffect, useRef } from 'react'
import mapData from 'echarts/map/json/province/xianggang.json'


export default function EchartInit(props) {
    console.log(props);
    const { options, type, sourceName } = props
    const curRef = useRef(null);
    let echart = null;
    
    const initEchart = () => {
        console.log(mapData)
        if(type == 'map') {
            echarts.registerMap(sourceName, { geoJSON: mapData})
        }

        echart = echarts.init(curRef.current);
        window.addEventListener('resize', handleResize)

        options && echart.setOption(options);
        echart.resize();
    }

    const handleResize = () => {
        try {
            echart.resize();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        initEchart();
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [options])

    return (
        <div ref={curRef} style={{width: "100%", height: "100%"}}></div>
    )
}
