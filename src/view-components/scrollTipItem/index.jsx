import React, { useState, useEffect } from 'react'
import Tooltips from '../Tooltips'
import { ScrollItem } from './style'

export default function useScrollTipItem(props) {

    let { count } = props

    const [ testCount, setTestCount ] = useState()

    useEffect(() => {
        setTestCount(count)
    })

    return (
        <ScrollItem>
            <Tooltips testCount={testCount}></Tooltips>
        </ScrollItem>
    )
}
