import React, { Component } from "react";
import {
    Item,
    Label,
    List,
    Icon,
    Card,
    Button
} from "semantic-ui-react";

class SkillsCard extends Component {
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
                        <Icon name={'star'} />
                        Skills
                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <List>
                            <List.Item>
                                <List.Header>PHP</List.Header>
                                <Label color={'red'} key={'red'} circular>
                                    Advanced
                                </Label>
                            </List.Item>
                            <List.Item>
                                <List.Header>PHP</List.Header>
                                <Label color={'red'} key={'red'} circular>
                                    Advanced
                                </Label>
                            </List.Item>
                            <List.Item>
                                <List.Header>PHP</List.Header>
                                <Label color={'red'} key={'red'} circular>
                                    Advanced
                                </Label>
                            </List.Item>
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default SkillsCard;
