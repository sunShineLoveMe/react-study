import React, { useEffect, useState } from 'react'
import AsyncTooltipContent from '../asyncTooltipContent'
import { getGroupTransferQuantitySummaryByRegisterRegion } from '../../api/collect/index'
import ReactTooltip from 'react-tooltip'
import { TooltipBg } from './style'


export default function useTooltips() {

    const [title, setTitle] = useState("测试提示框")
    const [content, setContent] = useState("测试提示框内容")

    const fetGetGroupTransferQuantitySummaryByRegisterRegion = (dataTip) => {
        let tempContent =""
        getGroupTransferQuantitySummaryByRegisterRegion(res => {
            if(res.success) {
                tempContent = `<div>${title}撒旦发射点发</div>`
            }
        })
        return tempContent
    }

    // useEffect(() => {
    //     ReactTooltip.clickable = true
    // })

    return (
        <TooltipBg>

            {/* <button type="button" 
                    data-for="test"
                    data-tip="异步调用接口">异步显示提示框内容</button>
            <ReactTooltip id="test" getContent={fetGetGroupTransferQuantitySummaryByRegisterRegion} /> */}
            <p data-tip='999' 
                data-event="click" 
                data-place="right"
                data-html={true}
                data-for='test'>
                异步显示提示框内容
            </p>
            <ReactTooltip id='test' getContent={(dataTip) => {fetGetGroupTransferQuantitySummaryByRegisterRegion()}} />

        </TooltipBg>

    )
}
