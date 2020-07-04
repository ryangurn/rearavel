import React, { Component } from "react";
import {Label, Accordion, Grid, Card, Icon, Button, Modal, Form} from "semantic-ui-react";
import PropTypes from 'prop-types';

class ContractsCard extends Component {
    state = {open: false}

    show = () => () => this.setState({open: true})
    close = () => this.setState({open: false})

    render() {
        const { open } = this.state;
        return(
            <div style={{paddingTop: '14px'}}>
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
                            <p>{this.props.text}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Modal as={'form'} size={'tiny'} open={open} onClose={this.close} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Edit Contracts</Modal.Header>
                    <Modal.Content scrolling>
                        <Form.Input label='Text' placeholder={'Text'} type='text' value={this.props.name} width={16} />
                        <Form.Input label='Content' placeholder={'Content'} type='text' value={this.props.text} width={16} />
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

ContractsCard.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
};

export default ContractsCard;
