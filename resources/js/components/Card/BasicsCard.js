import React, { Component } from "react";
import {Label, Container, Grid, Card, Icon, Button} from "semantic-ui-react";
import PropTypes from 'prop-types';

class BasicsCard extends Component {
    render() {
        const labels = this.props.items.map((item, key) =>
            <Grid.Column>
                <Label as={'a'} image color={item.color} key={item.color}>
                    <Icon name={item.icon} />
                    {item.text}
                </Label>
            </Grid.Column>
        );
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Icon name={'user circle'} />
                        {this.props.name}

                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <Grid columns={2}>
                            {labels}
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

BasicsCard.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
            icon: PropTypes.string,
            text: PropTypes.string,
        })
    ),
    name: PropTypes.string,
};

export default BasicsCard;
