import React, { Component } from "react";
import {
    Icon,
    List,
    Image,
    Card,
    Grid,
    Container
} from 'semantic-ui-react'
import moment from "moment";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            repos: 0,
            stars: 0,
            followers: 0,
        }
    }

    componentDidMount() {
        // set the title
        axios.get('/api/page/slug/home').then(response => {
            document.title = response.data[0].title;
        });
        // setup the settings values
        axios.get('/api/setting/key/name,age,github_repo,github_star,github_follower').then(response => {
            this.setState({
                name: response.data[0].payload,
                age: moment().diff(response.data[1].payload, 'years'),
                repos: response.data[2].payload.count,
                stars: response.data[3].payload.count,
                followers: response.data[4].payload.count
            });
        });
    }

    render() {
        const name = this.state.name;
        const age = this.state.age;
        const repos = this.state.repos;
        const stars = this.state.stars;
        const followers = this.state.followers;
        return (
            <Container>
                <Grid>
                    <Grid.Column width={16}>
                        <h2>About {name}</h2>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Card fluid>
                            <Image src='https://ryangurnick.com/wp-content/uploads/2018/12/EJB2a6T9_400x400.jpg' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{name}</Card.Header>
                                <Card.Meta>{age} Years Old</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <List>
                                    <List.Item>
                                        <Icon name='github' />
                                        <List.Content>
                                            {repos} Github Repo's
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='star' />
                                        <List.Content>
                                            {stars} Github Stars
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <Icon name='user circle' />
                                        <List.Content>
                                            {followers} Github Followers
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Card.Content>

                        </Card>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Card fluid>
                            <Card.Content>
                                <Card.Header>
                                    <Icon name={'user circle outline'} />
                                    About Me
                                </Card.Header>
                                <Card.Description>
                                    Hi, I am a programmer based in Eugene Oregon working on developing large scale enterprise applications. I am a full-time student at the University of Oregon. On this website, you will find information about my specialities and services ranging from custom application development to cyber security consulting. Please feel free to take a look around and inquire if you have any questions.
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Home;
