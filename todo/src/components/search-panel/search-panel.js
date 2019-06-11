import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {

    state = {
        filterText: ''
    }

    onFilterInputChange = (e) => {
        const filterText = e.target.value;
        this.setState({ filterText });
        this.props.onFilterInputChange(filterText);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                onChange={this.onFilterInputChange}
                value={this.state.filterText}
                placeholder="type to search" />
        );
    }
}
