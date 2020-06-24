import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class MenuExampleInverted extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu className={'fixed'} inverted>
                <Container>
                    <Menu.Item header>rearavel</Menu.Item>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='resume'
                        active={activeItem === 'resume'}
                        onClick={this.handleItemClick}
                    />
                </Container>
            </Menu>
        )
    }
}
