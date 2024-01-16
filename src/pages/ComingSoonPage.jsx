import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import CustomCountdown from "../components/CustomCountdown";
import { useState } from "react";
import BurgerIcon from "../components/BurgerIcon";
import { RxHamburgerMenu } from "react-icons/rx";


const ComingSoonPage = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="h-screen p-5 flex items-center flex-col">
      <div className="cs-top flex justify-between w-full">
        <div className="nav">
          <Button onClick={openDrawer} className="text-xl bg-gray-800">
            {/* <BurgerIcon/> */}
            <RxHamburgerMenu/>
          </Button>
          <Drawer open={open} onClose={closeDrawer} size={10000} className="py-[5rem] px-[2rem] bg-gray">
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray-100">
                We are MCCS. Mumbai City Carewell Security.
              </Typography>
              <IconButton variant="text" color="white" className="bg-gray-700" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography color="gray" className="mb-8 pr-4 font-normal">
              With an impeccable track record and experience of more than a decade, we stand as guardians of safety, offering a comprehensive suite of security solutions designed to protect you and what matters most to you. With an unwavering commitment to excellence and a dedication to staying ahead of emerging threats, we redefine the standards of security in an ever-evolving world.
            </Typography>
          </Drawer>
        </div>
        <div className="logo">MCCS</div>
      </div>
      <div className="cs-main flex justify-around items-center h-full w-full">
        <div className="cs-countdown">
          Launching In
          <CustomCountdown days={2} hours={5} minutes={30} seconds={15} />
        </div>
        <div className="cs-content max-w-[60%]">
          <div className="cs-head">
            Welcome to MCCS
          </div>
          <h3 className="font-bold text-4xl">We are currently working on a new super awesome website.</h3>
          <p className="">At MCCS, transparency is not just a promise; it's a cornerstone of our service philosophy, reflecting our dedication to keeping you informed and in control of your security solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage