import React, { Component } from "react";

import {
    Card,
    Icon,
    Grid,
    Modal,
    Button,
    Form,
    Label
} from "semantic-ui-react";
import PropTypes from 'prop-types';
import ColorInput from "../../Core/Input/ColorInput";

class ResumeCard extends Component {
    state = {editOpen: false, deleteOpen: false}

    showEdit = () => () => this.setState({editOpen: true})
    closeEdit = () => this.setState({editOpen: false})

    showDelete = () => () => this.setState({deleteOpen: true});
    closeDelete = () => () => this.setState({deleteOpen: false});

    render() {
        const { editOpen, deleteOpen } = this.state;
        return (
            <Grid.Column width={8}>
                <Card fluid style={{height: '100%'}}>
                    <Card.Content>
                        <Label color={this.props.durationColor} key={this.props.durationColor} className={'right floated'}>
                            {this.props.duration}
                        </Label>

                        <Card.Header>
                            <Icon style={{border: "0px"}} name={'address card'} />
                            {this.props.organization}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.occupation}
                        </Card.Meta>
                        <Card.Description>
                            {this.props.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button.Group widths={'two'}>
                            <Button inverted color={'orange'} key={'orange'} onClick={this.showEdit()}>Edit</Button>
                            <Button inverted color={'red'} key={'red'} onClick={this.showDelete()}>Delete</Button>
                        </Button.Group>
                    </Card.Content>
                </Card>
                <Modal as={'form'} size={'tiny'} open={editOpen} onClose={this.closeEdit} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Edit {this.props.organization}</Modal.Header>
                    <Modal.Content scrolling>
                        <Form.Input label='Organization' placeholder={'Organization'} type='text' width={16} value={this.props.organization} />
                        <Form.Input label='Occupation' placeholder={'Occupation'} type='text' width={16} value={this.props.occupation} />
                        <Form.Input label='Description' placeholder={'Description'} type='text' width={16} value={this.props.description} />
                        <Form.Input label='Duration' placeholder={'Duration'} type='text' width={16} value={this.props.duration} />
                        <ColorInput width={16} name={'Duration Color'} value={this.props.durationColor} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color={'red'} onClick={this.closeEdit}>Cancel</Button>
                        <Button color={'green'}>Save</Button>
                    </Modal.Actions>
                </Modal>
                <Modal as={'form'} size={'tiny'} open={deleteOpen} onClose={this.closeDelete} style={{position: 'static', height: 'auto'}} className={'form'}>
                    <Modal.Header>Delete {this.props.organization}</Modal.Header>
                    <Modal.Content scrolling>
                        Are you sure you want to delete this?
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color={'red'} onClick={this.closeDelete()}>No</Button>
                        <Button color={'green'}>Yes</Button>
                    </Modal.Actions>
                </Modal>
            </Grid.Column>
        );
    }
}

ResumeCard.propTypes = {
    organization: PropTypes.string,
    occupation: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
    durationColor: PropTypes.string,
};

export default ResumeCard;
