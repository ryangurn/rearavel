import React, { Component } from "react";
import {Container, Grid} from "semantic-ui-react";
import AboutCard from './Card/AboutCard';
import moment from "moment";

class Resume extends Component {
    constructor() {
        super();
        this.state = {
            slugName: '',
            settingName: '',
            settingAge: 0,
            settingDescription: '',
        }
    }

    componentDidMount() {
        // set the title
        axios.get('/api/page/slug/resume').then(response => {
            document.title = response.data[0].title;
            this.setState({
                slugName: response.data[0].name
            });
        });
        // setup the settings values
        axios.get('/api/setting/key/name,age,description,github_repo,github_star,github_follower').then(response => {
            this.setState({
                settingName: response.data[0].payload[0],
                settingAge: moment().diff(response.data[1].payload, 'years'),
                settingDescription: response.data[5].payload,
            });
        });
    }

    render() {
        const name = this.state.slugName;
        return (
            <Container>
                <Grid>
                    <Grid.Column width={6}>
                        <AboutCard name={this.state.settingName} age={this.state.settingAge} content={this.state.settingDescription} isContent={true} repos={0} stars={0} followers={0} />
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
