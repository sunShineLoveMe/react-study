import React from 'react'
import { NavLink, Outlet} from "react-router-dom"

export default function Home() {
    return (
        <div>
            <p>Home组件</p>
             {/* link和navlink都可以实现路由跳转，但
                 是navlink自身存在于一个active的类名，
                 可以在里边设置激活之后的样式 
            */}
            <NavLink to="/home/help">Help</NavLink><br/>
            <NavLink to="/home/about">About</NavLink><br/>

            <p>Outlet组件与vue中的router-view相似，可以用于嵌套路由的展示</p>
            <div style={{border: "1px solid black" }}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
