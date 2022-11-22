import React, { useEffect, useState } from 'react'

export default function useSonCount(props) {
    let { initialCount } = props

    let [count, setCount] = useState(0)

    const autoCount = () => {
        // setInterval(() => {
        //     console.log("-------------");
        //     setCount(count++)
        // }, 1000);
        setCount(7)
    }

    const handleClick = () => {
        setCount(++count)
    }

    useEffect(() => {
        autoCount()
    }, [])
    return (
        <div>
            <span style={{ color: "green", fontSize: '30px'}} onClick={() => handleClick()} >{count}</span>
        </div>    )
}
