import { useState } from 'react';
import profile from '../assets/icons/profile.svg';
import Dropdown from './Dropdown';
import { accountList } from '../constants';

const Account = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseOver = () => {
        setShowDropdown(true);
    };

    const handleMouseOut = () => {
        setShowDropdown(false);
    };

    return (
        <div
            className='relative flex justify-center items-center 
                        gap-3 hover:bg-blue-700
                        hover:text-white
                        px-1.5 rounded-lg cursor-pointer'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <img src={profile} className='w-8' />
            <p>Login</p>
            {showDropdown && (
                <div className='absolute top-full text-black z-10'>
                    <Dropdown type="New User?" list={accountList} />
                </div>
            )}
        </div>
    );
};

export default Account;
