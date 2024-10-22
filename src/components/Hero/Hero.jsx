import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ firstBook }) => {
    const { image } = firstBook;
    return (
        <div className="hero bg-base-200 min-h-[554px] rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl h-[394px]" />
                <div>
                    <h1 className="text-[56px] font-bold">Books to freshen</h1>
                    <h1 className="text-[56px] font-bold">up your bookshelf</h1>
                    <div className="flex justify-center lg:justify-start">
                        <Link to='/lists'>
                            <button className="mt-12 btn btn-primary bg-prime border-0 text-white">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {
    firstBook: PropTypes.object.isRequired
}

export default Hero;