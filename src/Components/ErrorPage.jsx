import React from 'react';

const ErrorPage = () => {
    return (
        <div className="text-center p-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
            <p className="text-gray-700">We're having trouble processing your request. Please try again later.</p>
        </div>
    );
};

export default ErrorPage;
