import React from 'react';

type navbarProps = {
    logout: boolean;
};

const navbar: React.FC<navbarProps> = (logout) => {
    return <>
    <div className={`w-screen h-20 bg-dark-red border-l-2 border-black drop-shadow-4xl relative`}>
        <h1 className="absolute left-6 top-5 font-semibold text-2xl">PPT Generator</h1>
        <button className={`absolute right-6 top-5 text-white text-lg mr-7 hover:text-blue-500 ${logout.logout ? "opacity-100" : "opacity-0"}`}>Logout</button>
    </div>
    </>
};
export default navbar;