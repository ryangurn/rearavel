import React, { Component } from 'react';
import {Dropdown, Form} from "semantic-ui-react";
import PropTypes from 'prop-types';

class ColorInput extends Component {
    colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
    tagOptions = [];

    constructor() {
        super();
        for (let i = 0; i < this.colors.length; i++) {
            this.tagOptions.push({
                key: this.colors[i],
                text: this.colors[i],
                value: this.colors[i],
                label: { color: this.colors[i], empty: true, circular: true },
            });
        }
    }

    render() {
        return (
        <Form.Group>
            <Form.Field label={this.props.name} control={Dropdown} placeholder={this.props.name} fluid selection options={this.tagOptions} width={this.props.width} defaultValue={this.props.value || {}} onChange={this.props.onChange} />
        </Form.Group>
        );
    }
}
ColorInput.propTypes = {
    name: PropTypes.string,
    width: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default ColorInput;
