import React, { useEffect, useState } from 'react'
import { TooltipBg } from './style'
import { getGroupTransferQuantitySummaryByRegisterRegion } from '../../api/collect/index'

export default function useAsyncFetch() {
    // let { showContent } = props

    const [contend, setContend] = useState("<div>你是狗</div>")

    useEffect(() => {
        // setContend(showContent)
        // fetchGetGroupTransferQuantitySummaryByRegisterRegion()
    })

    const fetchGetGroupTransferQuantitySummaryByRegisterRegion = () => {
        let tempContent = ""
        getGroupTransferQuantitySummaryByRegisterRegion().then(res => {
            if(res.success) {
                setContend(`<div>你是狗</div>`)
            }
        })
        return tempContent
    }

    return (
        <TooltipBg>
            <div>{contend}</div>
        </TooltipBg>
    )
}
