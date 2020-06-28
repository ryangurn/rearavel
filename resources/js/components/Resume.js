import React, { Component } from "react";
import {Container, Grid} from "semantic-ui-react";

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
            <Container style={{marginTop: '15px'}}>
                <Grid>
                    <Grid.Column width={6}>{name}</Grid.Column>
                    <Grid.Column width={10}></Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Resume;
