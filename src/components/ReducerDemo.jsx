import React, { useReducer } from 'react'

export default function ReducerDemo() {

    // 定义initState和reducer，可以管理多个状态
    const initState = { count: 0, uname: 'Mike'}
    // reducer有两个参数，第一个参数是传入的值，第二个参数是将要执行的操作的类型
    // 在函数中整合了所有类型的操作
    const reducer = (state, action) => {
        const { type, payload = 1} = action
        switch (type) {
            case "increment":
                return { ...state, count: state.count + payload } 
            case "decrement":
                return { ...state, count: state.count - 1 } 
            case "rename":
                return { ...state, uname: payload } 
            default:
                throw new Error()
        }
    }
    
    // 使用reducer需要传入reducer函数和初始值initialState
    // 返回一个数组，第一项state保存的值，第二项是dispatch
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            Reducer <br/>
            count: {state.count} <br/>
            uname: {state.uname} <br/>
            {/* 通过onclick事件调用dispatch，并传入一个有操作类型的对象 */}
            <button onClick={() => dispatch({ type: 'increment', payload: 2})}>增加</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
            <button onClick={() => dispatch({ type: 'rename', payload: 'Herny'})}>改名</button>
        </div>
    )
}
