import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './style-components/header/Header'
import Home from './pages/Home'
import Help from './pages/Help'
import About from './pages/About'
import Login from './pages/Login'

export default function App() {
  return (
    // <Routes>
    //   {/* path书写的是路径，element书写的是对应的组件 */}
    //   <Route path="/login" element = {<Login />}></Route>
    //   <Route path="/home" element = {<Home />}>
    //     {/*  新版本的嵌套路由直接由父路由包裹子路由  */}
    //     <Route path="help" element={<Help />}></Route>
    //     {/* <Route path="about" element={<About />}></Route> */}

    //     {/* 给子路由组件设置Index属性，那么该路径下就会显示该router的element对应的组件 */}
    //     <Route index element={<About />}></Route>
        
    //   </Route>
    //   {/* 路由的重定向
    //       这里使用的是navigate组件
    //       因为路由表的匹配是从上而下匹配的，所以重定向的路由是写在最下面的
    //   */}
    //   <Route path="*" element={<Navigate to="/Header" />}></Route>
    // </Routes>
    <Header />
  )
}
