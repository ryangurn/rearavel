import React, { Component } from "react";
import {
    Card,
    Icon,
    Button,
    Modal,
    Form,
    Accordion,
    Item,
    Label
} from "semantic-ui-react";
import PropTypes from 'prop-types';
import ColorInput from "../Core/Input/ColorInput";

class EducationCard extends Component {
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
        const items = this.props.items.map((item, key) =>
            <Item key={key.toString()}>
                <Item.Content>
                    <Label color={item.durationColor} key={key.toString()} className={'right floated'}>
                        {item.duration}
                    </Label>

                    <Item.Header>{item.organization}</Item.Header>
                    <Item.Meta>{item.location}</Item.Meta>
                    <Item.Description>{item.description}</Item.Description>
                </Item.Content>
            </Item>
        );
        const accordion = this.props.items.map((item, key) =>
            <div key={key.toString()}>
                <Accordion.Title active={activeIndex === key} index={key} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    { item.organization }
                </Accordion.Title>
                <Accordion.Content active={activeIndex === key}>
                    <Form.Input label='Organization' placeholder={'Organization'} type='text' value={item.organization} width={16} />
                    <Form.Input label='Location' placeholder={'Location'} type='text' value={item.location} width={16} />
                    <Form.Input label='Duration' placeholder={'Duration'} type='text' value={item.duration} width={16} />
                    <ColorInput width={16} name={'Duration Color'} value={item.durationColor} />
                    <Form.Input label='Description' placeholder={'Description'} type='textarea' value={item.description} width={16} />
                </Accordion.Content>
            </div>
        );
        return (
            <div style={{paddingTop: '14px'}}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name={'building outline'} />
                            {this.props.name}

                            <Button animated={true} size={'mini'} className={'compact right floated'} onClick={this.show()}>
                                <Button.Content visible>Edit</Button.Content>
                                <Button.Content hidden>
                                    <Icon name={'edit outline'} />
                                </Button.Content>
                            </Button>
                        </Card.Header>
                        <Card.Description>
                            <Item.Group divided>
                                {items}
                            </Item.Group>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Modal as={'form'} size={'tiny'} open={open} onClose={this.close} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Edit Education</Modal.Header>
                    <Modal.Content scrolling>
                        <Form.Group>
                            <Form.Input label='Title' placeholder={'Title'} type='text' width={16} value={this.props.name} />
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

EducationCard.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            duration: PropTypes.string,
            durationColor: PropTypes.string,
            location: PropTypes.string,
            organization: PropTypes.string,
            description: PropTypes.string,
        }),
    ),

};

export default EducationCard;
