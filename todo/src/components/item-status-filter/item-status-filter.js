import React from "react";
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    state = {
        selected: 'All'
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
                    onClick={() => { this.selectTab('All') }}
                    className={this.getTabClasses('All')}>All</button>
                <button type="button"
                    onClick={() => { this.selectTab('Active') }}
                    className={this.getTabClasses('Active')}>Active</button>
                <button type="button"
                    onClick={() => { this.selectTab('Done') }}
                    className={this.getTabClasses('Done')}>Done</button>
            </div>
        );
    }
} 