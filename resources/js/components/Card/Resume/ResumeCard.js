import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List,
    Button,
    Segment,
    Label
} from "semantic-ui-react";
import PropTypes from 'prop-types';

class ResumeCard extends Component {
    render() {
        return (
            <Grid.Column width={8}>
                <Card fluid style={{height: '100%'}}>
                    <Card.Content>
                        <Label color={this.props.durationColor} key={this.props.durationColor} className={'right floated'}>
                            {this.props.duration}
                        </Label>

                        <Card.Header>
                            <Icon style={{border: "0px"}} name={'address card'} />
                            {this.props.organization}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.occupation}
                        </Card.Meta>
                        <Card.Description>
                            {this.props.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group widths={'two'}>
                            <Button inverted color={'orange'} key={'orange'}>Edit</Button>
                            <Button inverted color={'red'} key={'red'}>Delete</Button>
                        </Button.Group>
                    </Card.Content>
                </Card>
            </Grid.Column>
        );
    }
}

ResumeCard.propTypes = {
    organization: PropTypes.string,
    occupation: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
    durationColor: PropTypes.string,
};

export default ResumeCard;
