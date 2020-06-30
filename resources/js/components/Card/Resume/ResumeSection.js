import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List,
    Button,
    Segment
} from "semantic-ui-react";
import PropTypes from 'prop-types';
import ResumeCard from "./ResumeCard";

class ResumeSection extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={16}>
                    <div className={'ui clearing'}>
                        <h4 className={'ui right floated header'}>
                            <Icon name={'plus circle'} />
                        </h4>
                        <h3 className={'ui left floated header'}>
                            {this.props.name}
                        </h3>
                    </div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <ResumeCard organization={'Elance'} occupation={'Freelance Programmer'} description={'Freelance programmer for design and functionality projects '} duration={'2016'} durationColor={'red'} />
                </Grid.Column>
            </Grid>
        );
    }
}

ResumeSection.propTypes = {
    name: PropTypes.string,
}

export default ResumeSection;
