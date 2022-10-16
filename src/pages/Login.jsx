import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    // useNavigate 函数会返回一个函数，navigate用来实现编程时导航的跳转，参考vue的router.push
    const navigate = useNavigate()
    return (
        <div>
            <p>LoginPage</p>
            {/* 
                第二个参数true表示push进去，直接替换掉了之前的组件，不会有历史，不能退回到前一步
            */}
            {/* <button onClick={() => {navigate("/home")}}>登录</button> */}
            <button onClick={() => {navigate("/home", {replace: true})}}>登录</button>
        </div>
    )
}
