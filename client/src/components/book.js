import React from 'react';

export default ({ id, title, author, genre }) => (
  <div className='flex flex-row my-1'>
    <div className='flex-grow'>{title}<span className='text-gray-600'> - {author}</span></div>
    <div className='text-gray-600'>{genre}</div>
  </div>
);
