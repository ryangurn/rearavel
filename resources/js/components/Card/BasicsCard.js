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

        console.log(e.target.value);
        console.log(f.value);

    render() {
        const { open, activeIndex } = this.state;
        const labels = this.props.items.map((item, key) =>
            <Grid.Column key={key.toString()}>
                <Label as={'a'} image color={item.color} key={item.color}>
                    <Icon name={item.icon} />
                    {item.text}
                </Label>
            </Grid.Column>
        );
        const accordion = this.props.items.map((item, key) =>
            <div key={key.toString()}>
                <Accordion.Title active={activeIndex === key} index={key} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    {item.text}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === key}>
                    <Form.Group>
                        <Form.Input label='Text' placeholder={'Text'} value={item.text} type='text' width={16} />
                    </Form.Group>
                    <ColorInput name={'Color'} width={16} value={item.color} />
                    <IconInput name={'Icon'} width={16} value={item.icon} />
                </Accordion.Content>
            </div>
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
                            <Form.Input label='Text' placeholder={'Text'} type='text' value={this.props.name} width={16} />
                        </Form.Group>
                        <Accordion styled>
                            {accordion}
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
