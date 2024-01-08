import {
  SearchButton,
  SearchInput,
  StyledSearchForm,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.querySelector('input').value;
    onSubmit(query);
    e.target.reset();
  };

  return (
    <StyledSearchForm onSubmit={handleFormSubmit}>
      <label>
        <SearchInput placeholder="Enter film name"></SearchInput>
      </label>
      <SearchButton type="submit">Search</SearchButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
