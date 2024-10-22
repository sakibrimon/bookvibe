import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const EmptyState = ({ message, address, label, isPagesReadPage }) => {
    return (
        <div className={`flex justify-center items-center ${isPagesReadPage ? 'min-h-[calc(100vh-104px)]' : ''}`}>
            <div className="flex flex-col items-center">
                <h3 className="text-xl lg:text-3xl">{message}</h3>
                <p className="mt-2 text-center">Try adding books first.</p>
                {/* <Link to={address}> */}
                <HashLink smooth to={`${address}#books`}>
                    <button className="mt-4 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                        {label}
                    </button>
                </HashLink>
                {/* </Link> */}
            </div>
        </div>
    );
};

EmptyState.propTypes = {
    message: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isPagesReadPage: PropTypes.bool.isRequired
}

export default EmptyState;