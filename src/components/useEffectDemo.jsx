import React, { useEffect, useState } from 'react'

function Test() {

    useEffect(() => {
        let timer = setInterval(() => {
            console.log('定时器正在执行!!!');
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })
    return(
        <div>this is test</div>
    )
}

export default function Home2() {

    const [flag, setFlag] = useState(true)

    return (
        <div>
            {flag? <Test/>: null}
            <button onClick={() => {setFlag(false)}}>switch</button>
        </div>
    )
}
