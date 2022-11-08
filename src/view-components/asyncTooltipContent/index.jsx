import React from 'react'
import { TooltipBg } from './style'
import { getGroupTransferQuantitySummaryByRegisterRegion } from '../../api/collect/index'

export default function useAsyncTooltipContent() {

    const fetchGetGroupTransferQuantitySummaryByRegisterRegion = () => {
        let count = 0
        getGroupTransferQuantitySummaryByRegisterRegion().then(res => {
            console.log(res)
            if(res.obj) {
                count = res.obj.length
            }
        })
        return `<div>${count}</div>`
    }
    
    return (
        <TooltipBg>
            <div>{fetchGetGroupTransferQuantitySummaryByRegisterRegion}</div>
        </TooltipBg>
    )
}
