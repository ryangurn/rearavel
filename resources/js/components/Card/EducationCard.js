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

class EducationCard extends Component {
    render() {
        const items = this.props.items.map((item, key) =>
            <Item>
                <Item.Content>
                    <Label color={item.durationColor} key={item.durationColor} className={'right floated'}>
                        {item.duration}
                    </Label>

                    <Item.Header>{item.organization}</Item.Header>
                    <Item.Meta>{item.location}</Item.Meta>
                    <Item.Description>{item.description}</Item.Description>
                </Item.Content>
            </Item>
        );
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Icon name={'building outline'} />
                        {this.props.name}

                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <Item.Group divided>
                            {items}
                        </Item.Group>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

EducationCard.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            duration: PropTypes.string,
            durationColor: PropTypes.string,
            location: PropTypes.string,
            organization: PropTypes.string,
            description: PropTypes.string,
        }),
    ),

};

export default EducationCard;
