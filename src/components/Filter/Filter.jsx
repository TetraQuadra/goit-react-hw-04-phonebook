import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, handleSearch }) => {
    const handleChange = (e) => {
        const { value } = e.currentTarget;
        handleSearch(value);
    };

    return (
        <input
            type="text"
            placeholder="Search by name"
            onChange={handleChange}
            value={filter}
        />
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default Filter;