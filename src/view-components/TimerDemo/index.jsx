import React,  { useState }  from 'react'
import { useEffect } from 'react'

export default function useTimerDemo() {

    const [state, setState] = useState(0)

    useEffect(() => {
        console.log(`你点击了${state}`)
        document.title = `你点击了${state}`
    })

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={e => setState(state + 1)}>点击</button>
        </div>
    )
}
