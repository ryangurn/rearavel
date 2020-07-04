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
        const cards = this.props.items.map((item, key) =>
            <ResumeCard key={key.toString()} organization={item.organization} occupation={item.occupation} description={item.description} duration={item.duration} durationColor={item.durationColor} />
        );
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
                {cards}
            </Grid>
        );
    }
}

ResumeSection.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            organization: PropTypes.string,
            occupation: PropTypes.string,
            description: PropTypes.string,
            duration: PropTypes.string,
            durationColor: PropTypes.string,
        }),
    ),
}

export default ResumeSection;
