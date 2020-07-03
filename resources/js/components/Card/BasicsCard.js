import React, { Component } from "react";
import {Label, Accordion, Grid, Card, Icon, Button, Modal, Form} from "semantic-ui-react";
import PropTypes from 'prop-types';
import ColorInput from "../Core/Input/ColorInput";
import IconInput from "../Core/Input/IconInput";

class BasicsCard extends Component {
    state = {open: false, activeIndex: 0}

    show = () => () => this.setState({open: true})
    close = () => this.setState({open: false})
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }


    render() {
        const { open, activeIndex } = this.state;
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
                    <Modal.Content scrolling>
                        <Form.Group>
                            <Form.Input label='Text' placeholder={'Text'} type='text' width={16} />
                        </Form.Group>
                        <Accordion styled>
                            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                What is a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <Form.Group>
                                    <Form.Input label='Text' placeholder={'Text'} type='text' width={16} />
                                </Form.Group>
                                <ColorInput name={'Color'} width={16} />
                                <IconInput name={'Icon'} width={16} />
                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                What kinds of dogs are there?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <Form.Group>
                                    <Form.Input label='Text' placeholder={'Text'} type='text' width={16} />
                                </Form.Group>
                                <ColorInput name={'Color'} width={16} />
                                <IconInput name={'Icon'} width={16} />
                            </Accordion.Content>

                            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                <Icon name='dropdown' />
                                How do you acquire a dog?
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <Form.Group>
                                    <Form.Input label='Text' placeholder={'Text'} type='text' width={16} />
                                </Form.Group>
                                <ColorInput name={'Color'} width={16} />
                                <IconInput name={'Icon'} width={16} />
                            </Accordion.Content>
                        </Accordion>
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
