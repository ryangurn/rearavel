import React, { Component } from "react";
import {
    Item,
    Label,
    List,
    Icon,
    Card,
    Button
} from "semantic-ui-react";
import PropTypes from 'prop-types';

class SkillsCard extends Component {
    render() {
        const items = this.props.items.map((item, key) =>
            <List.Item key={key.toString()}>
                <List.Header>{item.skill}</List.Header>
                <Label color={item.color} key={item.color} circular>
                    {item.level}
                </Label>
            </List.Item>
        );
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Icon name={'star'} />
                        {this.props.name}
                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <List>
                            {items}
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

SkillsCard.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            skill: PropTypes.string,
            color: PropTypes.string,
            level: PropTypes.string,
        }),
    ),
};

export default SkillsCard;
