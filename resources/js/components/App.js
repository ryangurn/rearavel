import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Resume from './Resume'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
