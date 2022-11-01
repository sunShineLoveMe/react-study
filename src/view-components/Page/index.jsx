import React,{useState, useEffect} from 'react'

export default function usePage() {

    const [age, setAge] = useState(18)
    const [money, setMoney] = useState(1000)

    // 只有数组中的状态发生了改变，才会去触发useEffect执行
    useEffect(() => {
        console.log('我被执行了');
    }, [])

    return (
        <div>
            <h1>{age}</h1>
            <h2>{money}</h2>
            <button onClick={e => setAge(age + 1)}>长大</button>
            <button onClick={e => setMoney(money + 1000)}>变有钱</button>
        </div>
    )
}
