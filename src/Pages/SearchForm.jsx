import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const formSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-4 translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={16}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Enter name of movie..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
