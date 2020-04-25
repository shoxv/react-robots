import React from 'react';
import './filter-bar.css';

export const FilterBar = ({placeholder, handleChange}) => (
    <div>
    <input
        className="search" 
        type="search" 
        placeholder={placeholder}
        onChange={handleChange} 
    />
    </div>
)