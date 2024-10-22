import toast from "react-hot-toast";

export const getReadBooks = () => {
    let readBooks = [];
    const storedReadBooks = localStorage.getItem('readBooks');
    if (storedReadBooks) {
        readBooks = JSON.parse(storedReadBooks);
    }
    return readBooks;
}
export const getWishlistBooks = () => {
    let wishlistBooks = [];
    const storedWishlistBooks = localStorage.getItem('wishlistBooks')
    if (storedWishlistBooks) {
        wishlistBooks = JSON.parse(storedWishlistBooks);
    }
    return wishlistBooks;
}
export const saveReadBook = readBook => {
    let readBooks = getReadBooks();
    const isExistent = readBooks.find(rb => rb.bookId === readBook.bookId);
    if (isExistent) {
        return toast.error('You have already read this book!');
    }
    readBooks.push(readBook);
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
    toast.success('Book added to the read-list successfully!');
}
export const saveWishlistBook = wishlistBook => {
    let readBooks = getReadBooks();
    const isExistentInsideReadlist = readBooks.find(rb => rb.bookId === wishlistBook.bookId);
    if (isExistentInsideReadlist) {
        return toast.error('You have already read this book!');
    }
    let wishlistBooks = getWishlistBooks();
    const isExistentInsideWishlist = wishlistBooks.find(wb => wb.bookId === wishlistBook.bookId);
    if (isExistentInsideWishlist) {
        return toast.error('Already added to the wishlist!');
    }
    wishlistBooks.push(wishlistBook);
    localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
    toast.success('Book added to the wishlist successfully!');
}

export const sortItems = (items, field) => {
    let sorted = [...items];
    switch (field) {
        case 1:
            console.log("Sorting by rating");
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 2:
            console.log("Sorting by number of pages");
            sorted.sort((a, b) => b.totalPages - a.totalPages);
            break;
        case 3:
            console.log("Sorting by year of publishing");
            sorted.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            break;
        default:
            console.log("No sorting applied");
    }
    return sorted;
};
