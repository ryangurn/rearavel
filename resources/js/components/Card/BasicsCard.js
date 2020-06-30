import React, { Component } from "react";
import {Label, Container, Grid, Card, Icon, Button} from "semantic-ui-react";

class BasicsCard extends Component {
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
                        <Icon name={'user circle'} />
                        Basic

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
                                <Label as={'a'} image color={'red'} key={'red'}>
                                    <Icon name={'briefcase'} />
                                    Programmer & Cyber Security Specialist
                                </Label>
                            </Grid.Column>
                            <Grid.Column>
                                <Label as={'a'} image color={'orange'} key={'orange'}>
                                    <Icon name={'inbox'} />
                                    ryangurnick@gmail.com
                                </Label>
                            </Grid.Column>
                            <Grid.Column>
                                <Label as={'a'} image color={'olive'} key={'olive'}>
                                    <Icon name={'phone volume'} />
                                    +1 (818)-835-3177
                                </Label>
                            </Grid.Column>
                            <Grid.Column>
                                <Label as={'a'} image color={'green'} key={'green'}>
                                    <Icon name={'linkify'} />
                                    http://ryangurnick.com
                                </Label>
                            </Grid.Column>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default BasicsCard;
