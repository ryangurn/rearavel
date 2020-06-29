import React, { Component } from "react";
import {Container, Grid} from "semantic-ui-react";
import AboutCard from './Resume/AboutCard';

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }

    componentDidMount() {
        // set the title
        axios.get('/api/page/slug/resume').then(response => {
            document.title = response.data[0].title;
            this.setState({
                name: response.data[0].name
            });
        });
    }

    render() {
        const name = this.state.name;
        return (
            <Container>
                <Grid>
                    <Grid.Column width={6}>
                        <AboutCard />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <p>test</p>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Resume;
