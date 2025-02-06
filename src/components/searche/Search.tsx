import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import './search.css';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const debouncedSearch = useCallback(
    debounce((q: string) => onSearch(q), 300),
    [onSearch]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    <div>
      <input
        className='input'
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by title"
      />
    </div>
  );
};

export default Search;