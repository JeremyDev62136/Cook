"use client"
import { useState } from 'react';
import Menu from '../Menu/Menu';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className={`flex flex-col h-9 justify-around items-center relative z-20 lg:${isOpen ? "" : "hidden"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`h-1 w-10 bg-red-500 rounded-full transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-3 bg-red-100' : ''
                        }`}
                />
                <div
                    className={`h-1 w-10 bg-red-500 rounded-full transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                        }`}
                />
                <div
                    className={`h-1 w-10 bg-red-500 rounded-full transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3 bg-red-100' : ''
                        }`}
                />
            </button>
            {isOpen && (
                <Menu isOpen={isOpen}/>
            ) 
            }
        </>
    );
};

export default BurgerMenu;
