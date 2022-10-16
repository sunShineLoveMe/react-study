import React, { useReducer } from 'react'

export default function Home5() {

    const reducer = (state, action) => {
        if(action.type === 'add') {
            return {
                ...state,
                count: state.count + 1
            }
        } else if(action.type === 'jian') {
            return {
                ...state,
                count: state.count - 1
            }
        } else {
            return state
        }
    }

    const addCount = ()=> {
        dispatch({
            type: 'add'
        })
    }

    const min = ()=> {
        dispatch({
            type: 'jian'
        })
    }

    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <div>
        <div>{state.count}</div>
        <button onClick={addCount}>点击加1</button>
        <button onClick={min}>点击减1</button>
        </div>
    )
}
