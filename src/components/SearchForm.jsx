import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Form, FormConteiner, Input } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const formSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };
  return (
    <div>
      <Form onSubmit={formSubmit}>
        <FormConteiner>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-4 translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <Input
            type="text"
            placeholder="Enter name of movie..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </FormConteiner>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
