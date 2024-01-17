import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from "react-icons/rx";


const BurgerIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [hamMsg, setHamMsg] = useState("More Info");
    const openDrawer = () => { setOpen(true); setHamMsg("Close") };
    const closeDrawer = () => { setOpen(false); setHamMsg("More Info") };
    const handelDrawer = () => {
        if (open)
            closeDrawer();
        else
            openDrawer();
    }
    const genericHamburgerLine = "h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300";

    return (
        <Button onClick={() => {handelDrawer(); setIsOpen(!isOpen)}} className="absolute left-[.5rem] z-[999999] flex gap-3 text-xl bg-transparent border-[1px] border-gray-900 text-blue-600 flex justify-center items-center">
            {/* <RxHamburgerMenu /> */}

            <button
                className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                
            >
                <div
                    className={` bg-[#1c75bc] ${genericHamburgerLine} ${isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                        }`}
                />
                <div
                    className={` bg-[#1c75bc] ${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                        }`}
                />
                <div
                    className={` bg-[#1c75bc] ${genericHamburgerLine} ${isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                        }`}
                />
            </button>
            <span className="text-sm text-white">{hamMsg}</span>
        </Button>
    );
};

export default BurgerIcon;


