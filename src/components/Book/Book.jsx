import PropTypes from "prop-types";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { image, tags, bookName, author, category, rating } = book;
    return (
        <div>
            <Link
                to={`/books/${book.bookId}`}
            >
                <div className="p-6 card bg-base-100 w-96# w-full h-full shadow-xl# border rounded-2xl">
                    <figure className="bg-[#F3F3F3] rounded-2xl">
                        <img
                            src={image}
                            alt="Book"
                            className="p-4 h-[230px]" />
                    </figure>
                    <div className="mt-6 card-body# flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-3">
                            {
                                tags.map((tag, idx) => <button
                                    key={idx}
                                    className="btn btn-xs text-prime bg-[#23BE0A0D] rounded-[30px]">{tag}</button>)
                            }
                        </div>
                        <h2 className="my-4 card-title font-bold">{bookName}</h2>
                        <p className="mt-auto font-medium text-[#131313CC]">By : {author}</p>
                        <div className="mt-5 pt-5 flex justify-between border-t border-dashed font-medium text-[#131313CC]">
                            <p>{category}</p>
                            <div className="flex items-center gap-2">
                                <span>{rating}</span>
                                <span><IoIosStarOutline /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;