import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List, Button
} from "semantic-ui-react";

class ComputerSkillsCard extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Icon name={'desktop'} />
                        Computer Skills
                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <Grid columns={2}>
                            <Grid.Column>
                                <h4>Specialities</h4>
                                <List>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Web Design</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Database Development & Management</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Cyber Security</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <h4>Software</h4>
                                <List>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Web Design</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Database Development & Management</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Cyber Security</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <h4>Operating Systems</h4>
                                <List>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Web Design</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Database Development & Management</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Cyber Security</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <h4>Cyber Security</h4>
                                <List>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Web Design</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Database Development & Management</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Icon name={'right triangle'} />
                                        <List.Content>
                                            <List.Header>Cyber Security</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default ComputerSkillsCard;
