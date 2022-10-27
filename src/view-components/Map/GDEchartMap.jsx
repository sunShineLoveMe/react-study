import React from 'react'
import GDEchartInit from './GDInit/GDEchartInit'
import { initOption, provienceData, convertData} from "./option"

export default function GDEchartMap() {

    return (
        <GDEchartInit options={initOption}></GDEchartInit>
    )
}
