import React, { Component } from 'react'

export default class index extends Component {

    state = {
        count: 0
    }

    componentDidMount() {
        this.timer = setInterval(()=> {
            this.setState({count: this.state.count + 1})
        }, 500)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
        <div>
            <h1></h1>
        </div>
        )
    }
}
