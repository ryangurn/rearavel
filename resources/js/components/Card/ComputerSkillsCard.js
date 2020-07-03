import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List,
    Button
} from "semantic-ui-react";
import PropTypes from 'prop-types';

class ComputerSkillsCard extends Component {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        <Icon name={'desktop'} />
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
                            { this.props.items.map((innerArr, k) => (
                                <Grid.Column key={k.toString()}>
                                    <h4>{innerArr.section}</h4>
                                    <List key={k}>
                                        { innerArr.texts.map((item, key) =>
                                            <List.Item key={key.toString()}>
                                                <List.Icon name={'right triangle'} />
                                                <List.Content>
                                                    <List.Header>{item}</List.Header>
                                                </List.Content>
                                            </List.Item>
                                        )}
                                    </List>
                                </Grid.Column>
                            ))}
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

ComputerSkillsCard.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
          section: PropTypes.string,
          texts: PropTypes.arrayOf(
              PropTypes.string
          )
      })
    ),
};

export default ComputerSkillsCard;
