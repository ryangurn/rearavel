import React, { Component } from "react";
import {
    Item,
    Label,
    List,
    Icon,
    Card,
    Button
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

                        <Button animated={true} size={'mini'} className={'compact right floated'}>
                            <Button.Content visible>Edit</Button.Content>
                            <Button.Content hidden>
                                <Icon name={'edit outline'} />
                            </Button.Content>
                        </Button>
                    </Card.Header>
                    <Card.Description>
                        <Item.Group divided>
                            <Item>
                                <Item.Content>
                                    <Label color={'red'} key={'red'} className={'right floated'}>
                                        2016-Present
                                    </Label>

                                    <Item.Header>University of Oregon</Item.Header>
                                    <Item.Meta>Eugene, OR</Item.Meta>
                                    <Item.Description>
                                        GPA: 3.25 | Field of study: Computer and Informtion Science (CIS/CS) with a minor in Computer information technologies (CIT)
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Label color={'red'} key={'red'} className={'right floated'}>
                                        2016-Present
                                    </Label>

                                    <Item.Header>University of Oregon</Item.Header>
                                    <Item.Meta>Eugene, OR</Item.Meta>
                                    <Item.Description>
                                        GPA: 3.25 | Field of study: Computer and Informtion Science (CIS/CS) with a minor in Computer information technologies (CIT)
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Label color={'red'} key={'red'} className={'right floated'}>
                                        2016-Present
                                    </Label>

                                    <Item.Header>University of Oregon</Item.Header>
                                    <Item.Meta>Eugene, OR</Item.Meta>
                                    <Item.Description>
                                        GPA: 3.25 | Field of study: Computer and Informtion Science (CIS/CS) with a minor in Computer information technologies (CIT)
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Label color={'red'} key={'red'} className={'right floated'}>
                                        2016-Present
                                    </Label>

                                    <Item.Header>University of Oregon</Item.Header>
                                    <Item.Meta>Eugene, OR</Item.Meta>
                                    <Item.Description>
                                        GPA: 3.25 | Field of study: Computer and Informtion Science (CIS/CS) with a minor in Computer information technologies (CIT)
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Label color={'red'} key={'red'} className={'right floated'}>
                                        2016-Present
                                    </Label>

                                    <Item.Header>University of Oregon</Item.Header>
                                    <Item.Meta>Eugene, OR</Item.Meta>
                                    <Item.Description>
                                        GPA: 3.25 | Field of study: Computer and Informtion Science (CIS/CS) with a minor in Computer information technologies (CIT)
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Content>
                                    <Label color={'red'} key={'red'} className={'right floated'}>
                                        2016-Present
                                    </Label>

                                    <Item.Header>University of Oregon</Item.Header>
                                    <Item.Meta>Eugene, OR</Item.Meta>
                                    <Item.Description>
                                        GPA: 3.25 | Field of study: Computer and Informtion Science (CIS/CS) with a minor in Computer information technologies (CIT)
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default EducationCard;
