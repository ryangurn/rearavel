import React, { Component } from "react";
import {
    Icon,
    Card
} from "semantic-ui-react";

class EducationCard extends Component {
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
                        <Icon name={'building outline'} />
                        Education
                    </Card.Header>
                    <Card.Description>
                        123
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default EducationCard;
