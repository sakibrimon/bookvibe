import { useContext, useEffect, useRef, useState } from "react";
import { getWishlistBooks, sortItems } from "../../utils";
import ListItem from "../ListItem/ListItem";
import { SortFieldContext } from "../../pages/Lists/Lists";
import EmptyState from "../EmptyState/EmptyState";

const Wishlist = () => {
    const field = useContext(SortFieldContext);
    const [items, setItems] = useState([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        const books = getWishlistBooks();
        setItems(books);
    }, [])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (items.length === 0) return;
        const sortedItems = sortItems(items, field);
        setItems(sortedItems);
    }, [field, items.length]);

    if (items.length < 1) {
        return (
          <EmptyState
            message='Wishlist is empty'
            address='/'
            label='Browse Books'
            isPagesReadPage={false}
          />
        )
      }
    return (
        <div className="flex flex-col gap-6">
            {
                items.map(item => <ListItem key={item.bookId} item={item} />)
            }
        </div>
    );
};

export default Wishlist;