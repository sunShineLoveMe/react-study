import React, { useContext } from 'react'

export default function Home4() {

    // 通过createContext来创建上下文
    const AppContext = React.createContext()

    const Achild = () => {
        const {name1 } = useContext(AppContext)
        return (
            <div>这是组件A，使用的name值是: {name1}</div>
        )
    }

    const Bchild = () => {
        const {name2 } = useContext(AppContext)
        return (
            <div>这是组件B，使用的name值是: {name2}</div>
        )
    }


    return (
        <AppContext.Provider value={{name1: 'jack', name2: 'Bob'}}>
            <Achild></Achild>
            <Bchild></Bchild>
        </AppContext.Provider>
    )
}
