import { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState(items);

  const itemsToDisplay = itemList.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  return (
    <div className="ShoppingList">
      <Filter
        search={search}
        onSearchChange={setSearch}
        category={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
