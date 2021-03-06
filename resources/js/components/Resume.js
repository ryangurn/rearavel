import React, { Component } from "react";
import {Container, Grid} from "semantic-ui-react";
import moment from "moment";


import AboutCard from './Card/AboutCard';
import EducationCard from "./Card/EducationCard";
import SkillsCard from "./Card/SkillsCard";
import BasicsCard from "./Card/BasicsCard";
import ComputerSkillsCard from "./Card/ComputerSkillsCard";
import StatisticsCard from "./Card/StatisticsCard";
import ResumeSection from "./Card/Resume/ResumeSection";
import ContractsCard from "./Card/ContractsCard";

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
                settingName: response.data[1].payload[0],
                settingAge: moment().diff(response.data[2].payload, 'years'),
                settingDescription: response.data[0].payload,
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
                        <EducationCard name={'Education'} items={[{duration: '2016-Present', durationColor: 'orange', organization: 'University of Oregon', location: 'Eugene, OR', description: 'General Education'},{duration: '2016-Present', durationColor: 'orange', organization: 'University of Oregon', location: 'Eugene, OR', description: 'General Education'},{duration: '2016-Present', durationColor: 'orange', organization: 'University of Oregon', location: 'Eugene, OR', description: 'General Education'}]} />
                        <ContractsCard name={'Contracts'} text={'Information available upon request, please contact me privately for more information.'} />
                        <SkillsCard name={'Skills'} items={[{skill: 'PHP', color: 'red', level: 'Advanced'}, {skill: 'React', color: 'orange', level: 'Basic'}]}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <BasicsCard name={'Basics'} items={[{color: 'red', icon: 'briefcase', text: 'Programmer & Cyber Security Specialist '}, {color: 'orange', icon: 'inbox', text: 'ryangurnick@gmail.com'}, {color: 'olive', icon: 'phone volume', text: '+1 (818) 835-3177'}, {color: 'green', icon: 'linkify', text: 'https://ryangurnick.com'}]} />
                        <ComputerSkillsCard name={'Computer Skills'} items={[{section: 'Specialities', texts: ["Web Design", "Database Development & Management", "Cyber Security"]}, {section: 'Software', texts: ["Web Design", "Database Development & Management", "Cyber Security"]}, {section: 'Operating System', texts: ["Web Design", "Database Development & Management", "Cyber Security"]}, {section: 'Cyber Security', texts: ["Web Design", "Database Development & Management", "Cyber Security"]}]} />
                        <StatisticsCard name={'Statistics'} items={[{num: 65, label: 'Repositories'}, {num: 4, label: 'Followers'}, {num: 2, label: 'Stars'}, {num: 1, label: 'Watchers'}]}/>
                        <ResumeSection name={'Computer Science'} items={[{organization: 'Elance', occupation: 'Freelance Programmer', description: 'This is a description', duration: 'Present', durationColor: 'red'}, {organization: 'Elance', occupation: 'Freelance Programmer', description: 'This is a description', duration: 'Present', durationColor: 'red'}]} />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Resume;
