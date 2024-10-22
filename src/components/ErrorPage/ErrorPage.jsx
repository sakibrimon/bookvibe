import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="flex items-center h-full# min-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-600">But don&apsos;t worry, you can find plenty of other things about books on our homepage.</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                            {/* <button onClick={() => navigate(-1 || '/')} className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 w-full sm:w-auto"><span className="flex justify-center items-center gap-4"><BsArrowLeft /><span>Go Back</span></span></button> */}
                            <button onClick={() => window.history.length > 2 ? navigate(-1) : navigate('/')} className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 w-full sm:w-auto"><span className="flex justify-center items-center gap-4"><BsArrowLeft /><span>Go Back</span></span></button>
                            <button onClick={() => navigate('/')} className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 w-full sm:w-auto">Back to Home</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;