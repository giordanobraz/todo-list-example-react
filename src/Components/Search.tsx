interface SearchFormProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export default function SearchForm({
  searchTerm,
  setSearchTerm,
}: SearchFormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <form>
      <input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
}
