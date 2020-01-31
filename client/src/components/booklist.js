import React from 'react';
import { useQuery } from 'urql';
import Book from './book';

const getBooks = `
query GetBooks {
  books {
    id
    name
    author {
      name
    }
    genre
  }
}
`;

function process (result) {
  if (result.fetching) return 'Loading...';
  if (result.error) { console.error(result); return 'Error'; }
  return (
    <ul>
      {result.data.books.map(mapBooks)}
    </ul>
  );
}

function mapBooks ({
  id,
  name: title,
  author: {
    name: author
  },
  genre
}) {
  return <li key={id}><Book {...{ id, title, author, genre }} /></li>;
}

export default () => {
  const [result] = useQuery({
    query: getBooks
  });

  return (
    <div className='m-auto m-4 p-4 max-w-sm rounded shadow-lg bg-gray-100'>
      <h1 className='text-2xl font-bold'>Books</h1>
      {process(result)}
    </div>
  );
};
