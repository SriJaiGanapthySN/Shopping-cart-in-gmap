const Dropdown = ({ type, list }) => {
    return (
        <div className='bg-white shadow-lg rounded-md p-3 w-60'>
            <div className="flex items-center justify-between mb-2">
                <p className='font-bold text-gray-700'>{type}</p>
                <a href="#signup" className="text-blue-500 hover:text-blue-800 font-bold text-sm">Sign Up</a>
            </div>

            <ul>
                {list.map((item, index) => (
                    <li key={index} className='flex items-center gap-2 hover:bg-gray-300 p-2 rounded-md cursor-pointer'>
                        <img src={item.icon} alt={item.name} className='w-5 h-5' />
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown;
