import React, { Component } from "react";
import {
    Icon,
    List,
    Image,
    Card,
    Grid,
    Container
} from 'semantic-ui-react'

class Home extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Grid.Column width={6}>
                        <Card fluid>
                            <Image src='https://ryangurnick.com/wp-content/uploads/2018/12/EJB2a6T9_400x400.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Testing</Card.Header>
                                <Card.Meta>22 Years Old</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <List>
                                    <List.Item>
                                        <Icon name='github' />
                                        <List.Content>
                                            Github Repo's
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='star' />
                                        <List.Content>
                                            Github Stars
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='user circle' />
                                        <List.Content>
                                            Github Followers
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Card.Content>

                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Home;
