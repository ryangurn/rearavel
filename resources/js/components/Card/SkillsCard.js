import React, { Component } from "react";
import {
    Item,
    Label,
    List,
    Icon,
    Card,
    Button,
    Modal,
    Form,
    Accordion
} from "semantic-ui-react";
import PropTypes from 'prop-types';
import ColorInput from "../Core/Input/ColorInput";

class SkillsCard extends Component {
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
            <List.Item key={key.toString()}>
                <List.Header>{item.skill}</List.Header>
                <Label color={item.color} key={item.color} circular>
                    {item.level}
                </Label>
            </List.Item>
        );
        const accordion = this.props.items.map((item, key) =>
            <div>
                <Accordion.Title active={activeIndex === key} index={key} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    { item.skill }
                </Accordion.Title>
                <Accordion.Content active={activeIndex === key}>
                    <Form.Input label='Skill' placeholder={'Skill'} type='text' value={item.skill} width={16} />
                    <Form.Input label='Level' placeholder={'Level'} type='text' value={item.level} width={16} />
                    <ColorInput width={16} name={'Color'} value={item.color} />
                </Accordion.Content>
            </div>
        );
        return (
            <div style={{paddingTop: '14px'}}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name={'star'} />
                            {this.props.name}
                            <Button animated={true} size={'mini'} className={'compact right floated'} onClick={this.show()}>
                                <Button.Content visible>Edit</Button.Content>
                                <Button.Content hidden>
                                    <Icon name={'edit outline'} />
                                </Button.Content>
                            </Button>
                        </Card.Header>
                        <Card.Description>
                            <List>
                                {items}
                            </List>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Modal as={'form'} size={'tiny'} open={open} onClose={this.close} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Edit Skills</Modal.Header>
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

SkillsCard.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            skill: PropTypes.string,
            color: PropTypes.string,
            level: PropTypes.string,
        }),
    ),
};

export default SkillsCard;
