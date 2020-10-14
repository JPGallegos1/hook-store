import { Input } from "@chakra-ui/core";
const SearchBar = ({ setSearchProducts }) => {
  return (
    <>
      <Input
        type="text"
        name="tech"
        id="tech"
        onChange={(e) => setSearchProducts(e.target.value)}
        w="20rem"
        placeholder="Buscar tecnología..."
        borderColor="gray.500"
      />
    </>
  );
};

export default SearchBar;
