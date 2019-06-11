import React from "react";
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    state = {
        selected: 0
    }

    getTabClasses(tab) {
        return this.state.selected === tab ? "btn btn-info" : "btn btn-outline-secondary";
    }

    selectTab(tab) {
        this.setState({selected: tab});
        const { onTabSelected } = this.props;
        onTabSelected(tab);
    }

    render() {
        return (
            <div className='btn-group'>
                <button type="button"
                    onClick={() => { this.selectTab(0) }}
                    className={this.getTabClasses(0)}>All</button>
                <button type="button"
                    onClick={() => { this.selectTab(1) }}
                    className={this.getTabClasses(1)}>Active</button>
                <button type="button"
                    onClick={() => { this.selectTab(2) }}
                    className={this.getTabClasses(2)}>Done</button>
            </div>
        );
    }
} 