import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    List,
    Button,
    Modal,
    Form,
    Accordion
} from "semantic-ui-react";
import PropTypes from 'prop-types';
import ColorInput from "../Core/Input/ColorInput";
import IconInput from "../Core/Input/IconInput";

class ComputerSkillsCard extends Component {
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
        const accordion = this.props.items.map((item, key) =>
            <div>
                <Accordion.Title active={activeIndex === key} index={key} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                    {item.section}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === key}>
                    { item.texts.map((i, k) =>
                        <Form.Group fluid>
                            <Form.Input label='Text' placeholder={'Text'} type='text' value={i} action width={16}>
                                <input />
                                <Button color={'red'} type='button'>Remove</Button>
                            </Form.Input>
                        </Form.Group>
                    )}
                </Accordion.Content>
            </div>
        );
        return (
            <div style={{paddingTop: '14px'}}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Icon name={'desktop'} />
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
                                { this.props.items.map((innerArr, k) => (
                                    <Grid.Column key={k.toString()}>
                                        <h4>{innerArr.section}</h4>
                                        <List key={k}>
                                            { innerArr.texts.map((item, key) =>
                                                <List.Item key={key.toString()}>
                                                    <List.Icon name={'right triangle'} />
                                                    <List.Content>
                                                        <List.Header>{item}</List.Header>
                                                    </List.Content>
                                                </List.Item>
                                            )}
                                        </List>
                                    </Grid.Column>
                                ))}
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Modal as={'form'} size={'tiny'} open={open} onClose={this.close} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Edit Computer Skills</Modal.Header>
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

ComputerSkillsCard.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
          section: PropTypes.string,
          texts: PropTypes.arrayOf(
              PropTypes.string
          )
      })
    ),
};

export default ComputerSkillsCard;
