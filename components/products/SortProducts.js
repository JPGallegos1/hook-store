import { Select } from "@chakra-ui/core";

const SortProducts = ({ setSortProducts }) => {
  return (
    <>
      <Select
        ml={1}
        flex="0 0 25%"
        onChange={(e) => setSortProducts(e.target.value)}
      >
        <option value="ASC">ASC</option>
        <option value="DESC">DESC</option>
      </Select>
    </>
  );
};

export default SortProducts;
