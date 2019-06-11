import React from 'react';

import './search-panel.css';

const SearchPanel = ({onFilterInputChange}) => {
    return (
        <input type="text"
            className="form-control search-input"
            onChange={onFilterInputChange} 
            placeholder="type to search" />
    );
};

export default SearchPanel;
