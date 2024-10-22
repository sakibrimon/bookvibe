import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBook, saveWishlistBook } from "../../utils";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    console.log(book);

    const handleRead = readBook => {
        saveReadBook(readBook);
    }
    const handleWishlist = wishlistBook => {
        saveWishlistBook(wishlistBook);
    }

    return (
        <div className="mt-8 mb-24 flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between h-full">
            <div className="lg:w-[48%] p-[74px] bg-base-200 rounded-2xl flex justify-center items-center">
                <img src={book.image} alt="" className="h-[564px]" />
            </div>
            <div className="lg:w-[48%] flex flex-col">
                <h2 className="font-bold text-[40px]">{book.bookName}</h2>
                <p className="mt-5 text-[#131313CC] font-medium text-xl">By : {book.author}</p>
                <p className="mt-6 py-4 border-y text-[#131313CC] font-medium text-xl">{book.category}</p>
                <p className="my-6 text-[#131313B3]"><span className="font-bold text-[#131313]">Review :</span> {book.review}</p>
                <div className="mt-auto">
                    <span className="font-bold text-[#131313]">Tag</span>
                    {
                        book.tags.map((tag, idx) => <button
                            key={idx}
                            className="ml-3 btn btn-xs text-prime bg-[#23BE0A0D] rounded-[30px]">#{tag}</button>)
                    }
                </div>
                <div className="mt-6 pt-6 border-t">
                    <div className="grid grid-cols-2 gap-x-[60px]">
                        <p>Number of Pages: </p>
                        <p className="font-semibold">{book.totalPages}</p>
                        <p>Publisher: </p>
                        <p className="font-semibold">{book.publisher}</p>
                        <p>Year of Publishing: </p>
                        <p className="font-semibold">{book.yearOfPublishing}</p>
                        <p>Rating: </p>
                        <p className="font-semibold">{book.rating}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <button onClick={() => handleRead(book)} className="btn btn-outline border-[#1313134D] text-[#131313]">Mark as Read</button>
                    <button onClick={() => handleWishlist(book)} className="ml-4 btn btn-outline bg-sec text-white">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;