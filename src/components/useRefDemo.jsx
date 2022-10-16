import React, { Component, useEffect, useRef } from 'react'

class Test extends Component {
    render() {
        return (
            <div>我是类组件</div>
        )
    }
}

export default function Home3() {

    const testRef = useRef(null)
    const h1Ref = useRef(null)

    useEffect(() => {
        console.log(testRef.current)
        console.log(h1Ref.current)
    }, [])

    return (
        <div>
            {/* 获取类组件实例 */}
            <Test ref={testRef} />
            {/* 获取dom对象 */}
            <h1 ref={h1Ref}> this is h1</h1>
        </div>
    )
}
