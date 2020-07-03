import React, { Component } from 'react';
import {Dropdown, Form} from "semantic-ui-react";
import PropTypes from 'prop-types';

class ColorInput extends Component {
    tagOptions = [
        {
            key: 'red',
            text: 'Red',
            value: 'red',
            label: { color: 'red', empty: true, circular: true },
        },
        {
            key: 'orange',
            text: 'Orange',
            value: 'orange',
            label: { color: 'orange', empty: true, circular: true },
        },
        {
            key: 'yellow',
            text: 'Yellow',
            value: 'yellow',
            label: { color: 'yellow', empty: true, circular: true },
        },
        {
            key: 'olive',
            text: 'Olive',
            value: 'olive',
            label: { color: 'olive', empty: true, circular: true },
        },
        {
            key: 'green',
            text: 'Green',
            value: 'green',
            label: { color: 'green', empty: true, circular: true },
        },
        {
            key: 'teal',
            text: 'Teal',
            value: 'teal',
            label: { color: 'teal', empty: true, circular: true },
        },
        {
            key: 'blue',
            text: 'Blue',
            value: 'blue',
            label: { color: 'blue', empty: true, circular: true },
        },
        {
            key: 'violet',
            text: 'Violet',
            value: 'violet',
            label: { color: 'violet', empty: true, circular: true },
        },
        {
            key: 'purple',
            text: 'Purple',
            value: 'purple',
            label: { color: 'purple', empty: true, circular: true },
        },
        {
            key: 'pink',
            text: 'Pink',
            value: 'pink',
            label: { color: 'pink', empty: true, circular: true },
        },
        {
            key: 'brown',
            text: 'Brown',
            value: 'brown',
            label: { color: 'brown', empty: true, circular: true },
        },
        {
            key: 'grey',
            text: 'Grey',
            value: 'grey',
            label: { color: 'grey', empty: true, circular: true },
        },
        {
            key: 'black',
            text: 'Black',
            value: 'black',
            label: { color: 'black', empty: true, circular: true },
        },
    ];

    render() {
        return (
        <Form.Group>
            <Form.Field label={this.props.name} control={Dropdown} placeholder={this.props.name} fluid selection options={this.tagOptions} width={this.props.width} />
        </Form.Group>
        );
    }
}
ColorInput.propTypes = {
    name: PropTypes.string,
    width: PropTypes.number
};

export default ColorInput;
