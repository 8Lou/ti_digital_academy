import React, { useState } from 'react';
import './search.css';

interface SearchProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
        setQuery(''); // Очистка поля после поиска
    };

    return (
        <div>
            <input className='input'
                type="text" 
                value={query} 
                onChange={handleInputChange} 
                placeholder="Search by title" 
            />
        </div>
    );
};

export default Search;
