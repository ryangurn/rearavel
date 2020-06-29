import React, { Component } from "react";
import {Card, Grid, Icon, Image, List} from "semantic-ui-react";
import PropTypes from 'prop-types';

class AboutCard extends Component {
    render() {
        if (this.props.isContent) {
            return (
                <Grid.Column width={6}>
                    <Card fluid>
                        <Image src='https://ryangurnick.com/wp-content/uploads/2018/12/EJB2a6T9_400x400.jpg' wrapped
                               ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Meta>{this.props.age} Years Old</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            {this.props.content}
                        </Card.Content>

                    </Card>
                </Grid.Column>
            );
        }
        else
        {
            return (
                <Grid.Column width={6}>
                    <Card fluid>
                        <Image src='https://ryangurnick.com/wp-content/uploads/2018/12/EJB2a6T9_400x400.jpg' wrapped
                               ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Meta>{this.props.age} Years Old</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>

                            <List>
                                <List.Item>
                                    <Icon large="true" name={'github square'} />
                                    <List.Content>{this.props.repos} Github Repos</List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon large="true" name={'star'} />
                                    <List.Content>{this.props.stars} Github Stars</List.Content>
                                </List.Item>
                                <List.Item>
                                    <Icon large="true" name={'user circle outline'} />
                                    <List.Content>{this.props.followers} Github Followers</List.Content>
                                </List.Item>
                            </List>

                        </Card.Content>

                    </Card>
                </Grid.Column>
            );
        }
    }

}

AboutCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isContent: PropTypes.bool,
    content: PropTypes.string,

    repos: PropTypes.number,
    stars: PropTypes.number,
    followers: PropTypes.number
}

export default AboutCard;
