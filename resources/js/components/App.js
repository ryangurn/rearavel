import { HashRouter, Route, NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    Container,
    Menu,
} from 'semantic-ui-react'
import Home from './Home'
import Resume from './Resume'

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Default Title'
        }
    }

    componentDidMount() {
        axios.get('/api/setting/key/title').then(response => {
            this.setState({
                title: response.data[0].payload
            });
        });
    }

    render () {
        const title = this.state.title;
        return (
            <HashRouter>
                <div>
                    <Menu fixed='top' inverted>
                        <Container>
                            <NavLink to={'/'}>
                                <Menu.Item header>
                                    { title }
                                </Menu.Item>
                            </NavLink>
                            <NavLink to={'/'}>
                                <Menu.Item>
                                    Home
                                </Menu.Item>
                            </NavLink>
                            <NavLink to={'/resume'}>
                                <Menu.Item>
                                    Resume
                                </Menu.Item>
                            </NavLink>

                        </Container>
                    </Menu>

                    <Container main="true" style={{ marginTop: '7em' }}>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/resume'} component={Resume} />
                    </Container>

                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

