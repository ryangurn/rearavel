import React, { Component } from "react";
import {Card, Grid, Icon, Image, List} from "semantic-ui-react";
import moment from "moment";

class AboutCard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            repos: 0,
            stars: 0,
            followers: 0,
        };
    }

    componentDidMount() {
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
            <Grid.Column width={6}>
                <Card fluid>
                    <Image src='https://ryangurnick.com/wp-content/uploads/2018/12/EJB2a6T9_400x400.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{age} Years Old</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        I am working to further my knowledge in computer science and other computer-related areas in preparation for a career in software development, computer information systems, cybersecurity. Over the past couple of years, I have strived to learn the more formal side to computer science, and I wish to continue developing new technologies that find truth in the fundamentals.
                    </Card.Content>

                </Card>
            </Grid.Column>
        );
    }

}

export default AboutCard;
