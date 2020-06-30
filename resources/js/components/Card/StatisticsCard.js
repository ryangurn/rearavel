import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List,
    Button,
    Statistic
} from "semantic-ui-react";

class StatisticsCard extends Component {
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
                        <Icon name={'chart bar outline'} />
                        Statistics
                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <Statistic.Group>
                            <Statistic>
                                <Statistic.Value>65</Statistic.Value>
                                <Statistic.Label>Repositories</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>15</Statistic.Value>
                                <Statistic.Label>Followers</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>4</Statistic.Value>
                                <Statistic.Label>Stars</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>4</Statistic.Value>
                                <Statistic.Label>Watchers</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default StatisticsCard;
