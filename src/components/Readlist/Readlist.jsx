import { useContext, useEffect, useRef, useState } from "react";
import { getReadBooks, sortItems } from "../../utils";
import ListItem from "../ListItem/ListItem";
import { SortFieldContext } from "../../pages/Lists/Lists";
import EmptyState from "../EmptyState/EmptyState";

const Readlist = () => {
  const field = useContext(SortFieldContext);
  const [items, setItems] = useState([]);
  const isFirstRender = useRef(true); // Track the initial render

  // Load books on mount
  useEffect(() => {
    const books = getReadBooks();
    setItems(books);
  }, []);

  // Run sorting logic on field changes, skipping first render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Skip initial render sorting
      return;
    }
    if (items.length === 0) return; // Avoid sorting if items are not yet loaded
    const sortedItems = sortItems(items, field);
    setItems(sortedItems); // Update items with the sorted array
  }, [field, items.length]); // Track field changes and ensure items are loaded

  if (items.length < 1) {
    return (
      <EmptyState
        message='Read-list is empty'
        address='/'
        label='Browse Books'
        isPagesReadPage={false}
      />
    )
  }
  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => (
        <ListItem key={item.bookId} item={item} />
      ))}
    </div>
  );
};

export default Readlist;
