import React, { Component } from "react";
import {
    Icon,
    List,
    Image,
    Card,
    Grid,
    Container
} from 'semantic-ui-react'
import HomeCard from './Home/HomeCard'

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
                    <HomeCard />
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
