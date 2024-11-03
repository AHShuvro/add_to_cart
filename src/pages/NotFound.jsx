import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div
            className="flex flex-col justify-center items-center bg-gray-100 p-6 text-center"
            style={{ minHeight: 'calc(100vh - 80px)' }}
        >
            <div className="mb-6">
                <img
                    src="https://picsum.photos/300/200?random"
                    alt="Not Found"
                    className="w-64 h-64 md:w-96 md:h-96 object-contain"
                />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                Oops! Product Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
                {`The product you're looking for doesn't exist or has been removed.`}
            </p>
            <Link
                to="/allProducts"
                className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
            >
                Go Back to Products
            </Link>
            <p className="mt-4 text-sm text-gray-500">
                If you believe this is a mistake, please contact our support.
            </p>
        </div>
    );
};

export default NotFound;
