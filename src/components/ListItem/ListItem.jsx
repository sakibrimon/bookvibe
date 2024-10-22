import PropTypes from "prop-types";
import { GoPeople } from "react-icons/go";
import { LuFileBarChart } from "react-icons/lu";
import { PiMapPinLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
    const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, bookId } = item;

    return (
        <div className="p-8 flex flex-col md:flex-row gap-6 border rounded-2xl">
            <div className="w-full md:w-[230px] h-[230px] bg-base-200 rounded-2xl flex justify-center items-center">
                <img src={image} alt="" className="h-[172px] w-[129.32px]#" />
            </div>
            <div className="flex flex-col grow">
                <h3 className="font-bold text-2xl">{bookName}</h3>
                <p className="mt-4 text-[#131313CC] font-medium">By : {author}</p>
                <div className="mt-5 flex items-center">
                    <span className="font-bold text-[#131313]">Tag</span>
                    <div className="flex flex-wrap gap-3">
                        {
                            tags.map((tag, idx) => <button
                                key={idx}
                                className="ml-3 btn btn-xs rounded-[30px] text-prime bg-[#23BE0A0D]">#{tag}</button>)
                        }
                    </div>
                    <span className="ml-5 flex items-center gap-3"><PiMapPinLight /><span className="text-[#131313CC]">Year of Publishing: {yearOfPublishing}</span></span>
                </div>
                <div className="my-4 flex items-center gap-5">
                    <span className="flex items-center gap-3 text-[#13131399]"><GoPeople /><span>Publisher: {publisher}</span></span>
                    <span className="flex items-center gap-3 text-[#13131399]"><LuFileBarChart /><span>Page {totalPages}</span></span>
                </div>
                <div className="mt-auto pt-4 border-t flex flex-wrap gap-3">
                    <button className="btn btn-sm rounded-[30px] bg-[#328EFF26] text-[#328EFF]">Category: {category}</button>
                    <button className="btn btn-sm rounded-[30px] bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</button>
                    <Link to={`/books/${bookId}`}><button className="btn btn-sm rounded-[30px] bg-prime text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ListItem;