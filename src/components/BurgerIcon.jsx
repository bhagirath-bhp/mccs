import React, { useState } from 'react';

const BurgerIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            id="nav-icon4"
            className={`w-12 h-9 flex flex-col gap-[2rem] relative m-auto cursor-pointer transition-transform ${isOpen ? 'rotate-45 translate-y-[-3px] translate-x-8' : ''
                }`}
            onClick={handleToggle}
        >
            <span
                className={`block absolute h-1 w-9 bg-blue-600 rounded-full opacity-100 left-0 transition-transform ${isOpen ? 'rotate-45 translate-y-[-3px] translate-x-8' : ''
                    }`}
            ></span>
            <span
                className={`block absolute h-1 w-9 bg-blue-600 rounded-full opacity-0 left-0 transition-opacity ${isOpen ? 'opacity-0' : ''
                    }`}
            ></span>
            <span
                className={`block absolute h-1 w-9 bg-blue-600 rounded-full opacity-100 left-0 transition-transform ${isOpen ? '-rotate-45 translate-y-[39px] translate-x-8' : ''
                    }`}
            ></span>
        </div>
    );
};

export default BurgerIcon;
