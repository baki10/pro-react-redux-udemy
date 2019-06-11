import React from 'react';

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onInputChange = (e) => {
        this.setState({ label: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.clearLabel();
    }

    clearLabel() {
        this.setState({ label: '' });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit}>
                <input type='text' className='form-control'
                    onChange={this.onInputChange}
                    value={this.state.label}
                    placeholder='What need to be done?' />

                <button className='btn btn-outline-secondary'>
                    Add
                </button>
            </form>
        );
    }
}