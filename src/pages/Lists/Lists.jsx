import { SlArrowDown } from "react-icons/sl";
import { Link, Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const SortFieldContext = createContext(0);

const Lists = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sortField, setSortField] = useState(0);

    const handleSortBy = field => {
        setSortField(field);
    }

    return (
        <div className="mb-24">
            <h3 className="mt-8 py-8 bg-base-200 rounded-2xl font-bold text-[28px] text-center">Books</h3>
            <div className="mt-8 flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 mb-0 w-[152px] bg-prime text-white flex items-center gap-5"><span>Sort By</span> <SlArrowDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52# p-2 shadow">
                        <li><a onClick={() => handleSortBy(1)} className="flex justify-center">Rating</a></li>
                        <li><a onClick={() => handleSortBy(2)} className="flex justify-center">Number of Pages</a></li>
                        <li><a onClick={() => handleSortBy(3)} className="flex justify-center">Year of Publishing</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-14 mb-8 flex items-center -mx-4# overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
                <Link
                    to={``}
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-[#1313134d] ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg text-[#131313CC]' : 'border-b text-[#13131380]'}`}>
                    <span>Read Books</span>
                </Link>
                <Link to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-[#1313134d] ${tabIndex === 1 ? 'border border-b-0 rounded-t-lg text-[#131313CC]' : 'border-b text-[#13131380]'}`}>
                    <span>Wishlist Books</span>
                </Link>
                <div className="border-b border-[#1313134d] w-full py-3">&nbsp;</div>
            </div>
            <SortFieldContext.Provider value={sortField}>
                <Outlet />
                {/* <div className={`${tabIndex === 0 ? '' : 'hidden'}`}>
                    <Readlist />
                </div>
                <div className={`${tabIndex === 1 ? '' : 'hidden'}`}>
                    <Wishlist />
                </div> */}
            </SortFieldContext.Provider>
        </div>
    );
};

export default Lists;