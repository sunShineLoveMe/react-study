## React Hooks

### 常用的五种钩子

#### useState()

纯函数组件是没有状态的，useState就是为函数组件引入状态的

#### useReducer()

* useReducer, useState, redux都是用来管理状态的，区别是：
  useState一次只能管理一个状态，且只能改变state的值，不能进行多个状态管理以及更复杂的业务逻辑，所以我们可以用useReducer代替useState,同时useReducer又比redux使用起来更加简介，更加轻量级
* 使用步骤
  * 定义初始状态initState
  * 创建reducer
  * 使用reducer
* 使用场景
  * 可用于提高应用的性能，当更新逻辑比较复杂的时，可以考虑使用useReducer
  * 任何使用useState的地方都可以使用useReducer

#### useEffect()

* useEffect是可以检测数据更新的，可以用来更好的处理副作用。
* useEffect接收两个参数，一个参数就是你要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项，只要数组发生改变，useEffect就会执行。
* 当第二个参数省略不填的时候，useEffect会在每次组件渲染的时候执行，这一点类似componentDidMount.
* useEffect回调是在dom渲染完毕之后执行，和vue中watch很像，但是执行的时机不同，watch是一开始就执行了

#### useContext()

* 用于在组件之间共享状态，而不必显示的通过组件树的逐层传递props
* 使用步骤
  * 使用createContext创建context对象
  * 在顶层组件通过provider提供数据
  * 在底层组件（子组件）通过useContext函数获取数据

#### useRef()

* 用于在函数组件中获取真实的dom元素或者组件实例（因为函数组件没有实例，因此这里的获取组件实例是指获取类组件实例）
* 使用步骤
  * 导入useRef函数
  * 执行useRef函数并且传入null,返回值为一个对象，内部由一个current属性存放拿到的dom对象(组件实例)
  * 通过ref绑定要获取的元素或者组件实例
