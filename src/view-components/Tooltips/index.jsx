import React, { useEffect, useState } from 'react'
import ReactDOMServer from 'react-dom/server';
import AsyncTooltipContent from '../asyncTooltipContent'
import { getGroupTransferQuantitySummaryByRegisterRegion } from '../../api/collect/index'
import ReactTooltip from 'react-tooltip'
import AsyncFetch from '../asyncFetch'
import { TooltipBg } from './style'


export default function useTooltips(props) {

    let { testCount } = props

    const [toolCount, setToolCount] = useState(0)
    const [title, setTitle] = useState("测试提示框")
    const [showContent, setShowContent] = useState("<div>你是人</div>")

    const fetGetGroupTransferQuantitySummaryByRegisterRegion = () => {
        console.log(".....")
        getGroupTransferQuantitySummaryByRegisterRegion(res => {
            if (res.success) {
                setShowContent(`<div>我是在父组件异步的数据....</div>`)
            }
        })
    }

    useEffect(() => {
        setToolCount(testCount)
        ReactTooltip.rebuild()
    })

    return (
        <TooltipBg>
            <div className="example-jsx">
                {/* <div className="block">
                    <a data-for="soclose" data-tip="1">
                        1 (❂‿❂)
                    </a>
                </div>
                <div className="block">
                    <a data-for="soclose" data-tip="2">
                        2 (❂‿❂)
                    </a>
                </div>
                <div className="block">
                    <a data-for="soclose" data-tip="3">
                        3 (❂‿❂)
                    </a>
                </div>
                <div className="block">
                    <a data-for="soclose" data-tip="4">
                        4 (❂‿❂)
                    </a>
                </div>
                <div className="block">
                    <a data-for="soclose" data-tip="5">
                        5 (❂‿❂)
                    </a>
                </div>
                <div className="block">
                    <a data-for="soclose" data-tip="6">
                        6 (❂‿❂)
                    </a>
                </div>
                <div className="block">
                    <a data-for="soclose" data-tip="7">
                        7 (❂‿❂)
                    </a>
                </div> */}
                <div className="block">
                    <div data-for="soclose" data-event="click" data-tip="8">
                        8 (❂‿❂)
                    </div>
                </div>

                <ReactTooltip
                    id="soclose"
                    getContent={(dataTip) => (
                        <div>
                            <h3>This little buddy is {dataTip}</h3>
                            <p>{toolCount}</p>
                        </div>
                        // <AsyncFetch/>
                    )}
                    effect="solid"
                    delayHide={500}
                    delayShow={500}
                    delayUpdate={500}
                    place="right"
                    border={true}
                    clickable={true}
                    type="light"
                />
            </div>

            {/* <div className="example-jsx">
                <div className="block">
                    <div data-tip data-for="clickme" data-event="click">
                        点我
                    </div>
                </div>

                <ReactTooltip
                    id="clickme"
                    place="right"
                    effect="solid"
                    html={true}
                    clickable={true}
                >
                    <AsyncFetch showContent={showContent}/>
                </ReactTooltip>
            </div> */}
            {/* <span data-for="foo">{content}</span> */}
            {/* <button type="button" 
                    data-for="test"
                    data-html={true}
                    data-tip="异步调用接口">异步显示提示框内容</button> */}
            {/* <ReactTooltip clickable={true} id="test" 
                getContent={fetGetGroupTransferQuantitySummaryByRegisterRegion}> */}
            {/* <ReactTooltip clickable={true} id="clickme" place='right' effect="solid">
                    <input type="text" placeholder="Type something..." />sdfd
            </ReactTooltip>         */}
            {/* <p  data-event="click" 
                data-place="right"
                data-html={true}
                data-for='test'>
                异步显示提示框内容
            </p>
            <ReactTooltip id='test' getContent={fetGetGroupTransferQuantitySummaryByRegisterRegion()} /> */}

        </TooltipBg>

    )
}
