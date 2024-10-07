import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = ({ message = "Loading..." }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-10">
            <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="flex flex-col items-center">
                    <Loader2 className="h-16 w-16 animate-spin text-blue-500 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800">{message}</h3>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;