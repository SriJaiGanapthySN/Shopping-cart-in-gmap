import { Link } from 'react-router-dom';
import React from 'react';

const Nav = ({ navList }) => {
    return (
        <div className="w-full bg-white rounded-md shadow-md overflow-x-auto hidden sm:block">
            <div className="flex flex-nowrap justify-start sm:justify-center gap-4 sm:gap-8 p-4 sm:p-6">
                {navList.map((nav, index) => (
                    <div key={index} className="flex flex-col items-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                        <img
                            src={nav.image}
                            alt={nav.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                        />
                        <p className="text-center text-sm sm:text-base mt-2 2xl:text-2xl">{nav.name}</p>
                        <Link></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nav