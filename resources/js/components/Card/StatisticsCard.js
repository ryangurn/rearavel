import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List,
    Button,
    Statistic
} from "semantic-ui-react";
import PropTypes from 'prop-types';

class StatisticsCard extends Component {
    render() {
        const stats = this.props.items.map((item, key) =>
            <Statistic key={key.toString()}>
                <Statistic.Value>{item.num}</Statistic.Value>
                <Statistic.Label>{item.label}</Statistic.Label>
            </Statistic>
        );
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Icon name={'chart bar outline'} />
                        {this.props.name}
                    </Card.Header>
                    <Card.Description>
                        <Statistic.Group widths={'four'}>
                            {stats}
                        </Statistic.Group>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

StatisticsCard.propType = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            num: PropTypes.number,
            label: PropTypes.string,
        }),
    ),
};

export default StatisticsCard;
