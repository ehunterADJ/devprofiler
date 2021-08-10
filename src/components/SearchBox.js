import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2 tr'>
            <input
                className='pa3 ba b--green w-third'
                type='search'
                onChange={searchChange}
                placeholder='Search developers or tech stack' />

        </div>
    );
}

export default SearchBox;