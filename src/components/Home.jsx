import React, { useEffect, useState } from 'react'

export default function Home() {

    const [loading, setLoading] = useState(true)
    // 第二个参数没有填写，相当于componentDidMount
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    })

    return (
        loading?<div>Loading</div>:<div>内容加载完毕</div>
    )
}
