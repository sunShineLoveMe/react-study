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

## React 路由

router应用也是单页面应用(SPA),因此也需要引入路由来控制不同组件来实现隐藏和展示从而实现不同页面的效果，保持UI和URL的同步

#### 路由模式

* history模式
  * history模式对应引入BrowerRouter组件

## React脚手架概念

* React StrictMode严格模式
  * 主要用来检查项目中潜在问题的工具，和fragment一样，它不会渲染任何可见的UI，为其后代元素触发额外的检查和警告。
* React fragment 标签
  * Fragment组件在不创建额外dom元素的情况下，让render()方法中返回多个元素，相当于空标签<>`</>`
  * Fragment标签支持能接收键值和属性，可以遍历循环元素

## React styled-components的使用

 styled-components是第三方的库，是一种css的私有化方式，用来实现css in js的方式

在多人协作的方式下，css的命名方式可能会发生冲突，与vue中的scoped不同，react用styled-components的给类名加了随机符的方式实现了css的私有化

#### 好处

* 性能好
* 彻底解耦components与css文件，all in js
* 更好的实现了React的组件化思想
* 样式可以使用变量，继承，使用起来更加自由，灵活

## react结合echart

### echart知识

#### echart.init()

创建一个echart实例，返回实例对象，不能在单个容器上初始化多个echarts实例，其中init的配置项中的renderer：渲染模式，支持canvas和svg两种模式

#### echart.dispose()

 销毁实例，实例销毁之后无法再被使用

#### echart.setOption()

设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过setOption完成，Echart会合并新的参数和数据，然后刷新图表。如果开启动画的话，Echart找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
