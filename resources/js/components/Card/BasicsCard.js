import React, { Component } from "react";
import {Label, Container, Grid, Card, Icon, Button, Modal, Form} from "semantic-ui-react";
import PropTypes from 'prop-types';

class BasicsCard extends Component {
    state = {open: false}

    show = () => () => this.setState({open: true})
    close = () => this.setState({open: false})

    render() {
        const { open } = this.state;
        const labels = this.props.items.map((item, key) =>
            <Grid.Column>
                <Label as={'a'} image color={item.color} key={item.color}>
                    <Icon name={item.icon} />
                    {item.text}
                </Label>
            </Grid.Column>
        );
        return (
            <div>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name={'user circle'} />
                            {this.props.name}

                            <Button animated={true} size={'mini'} className={'compact right floated'} onClick={this.show()}>
                                <Button.Content visible>Edit</Button.Content>
                                <Button.Content hidden>
                                    <Icon name={'edit outline'} />
                                </Button.Content>
                            </Button>
                        </Card.Header>
                        <Card.Description>
                            <Grid columns={2}>
                                {labels}
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Modal as={'form'} size={'tiny'} open={open} onClose={this.close} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Edit Basics</Modal.Header>
                    <Modal.Content>
                        <Form.Group>
                            <Form.Input label='Text' placeholder={'Text'} type='text' width={16} />
                        </Form.Group>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color={'red'} onClick={this.close}>Cancel</Button>
                        <Button color={'green'}>Save</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

BasicsCard.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
            icon: PropTypes.string,
            text: PropTypes.string,
        })
    ),
    name: PropTypes.string,
};

export default BasicsCard;
