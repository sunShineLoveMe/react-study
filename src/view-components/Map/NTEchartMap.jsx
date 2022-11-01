import React from 'react'
import NTEchartInit from './NTInit/NTEchartInit'
import {initOption} from "./data/options/NT_op"

export default function GDEchartMap() {
    return (
        <NTEchartInit options={initOption}></NTEchartInit>
    )
}
