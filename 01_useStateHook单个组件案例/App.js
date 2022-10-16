import React from 'react'
import { useState } from "react";


export default function App() {

  /**
   * 引入useState钩子，并给一个初始值,其中这个状态变量是name,而setName
   * 是用于更新其值的函数
   */
  const [name, setName] = useState("Ihechikara")

  const changeName =() => {
    setName("更改之后的名字")
  }

  return (
    <div> 
      <p>My name is {name}</p>
      <button onClick={changeName}>Clike Me</button>
    </div>
  )
}
