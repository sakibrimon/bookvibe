import PropTypes from "prop-types";
import Book from "../Book/Book";

const Books = ({ books }) => {
    return (
        <div className="mt-24">
            <h3 className="font-bold text-[40px] text-center">Books</h3>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.array.isRequired
}

export default Books;