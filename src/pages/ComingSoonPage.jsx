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
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const ComingSoonPage = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="h-screen p-5 flex items-center flex-col bg-black">
      <div className="cs-top flex justify-between w-full">
        <div className="nav">
          <Button onClick={openDrawer} className="text-xl bg-transparent border-[1px] border-blue-600 text-blue-600">
            {/* <BurgerIcon/> */}
            <RxHamburgerMenu />
          </Button>
          <Drawer open={open} onClose={closeDrawer} size={10000} className="py-[5rem] px-[8rem] bg-gray">
            <div className="mb-6 flex items-center justify-between h-full">
              <div className="drawer-left">
                <Typography variant="h5" className="text-blue-gray-100 text-[4rem]">
                  We are MCCS. Mumbai City Carewell Security.
                </Typography>
                <Typography color="gray" className="mb-8 pr-4 font-normal w-[90%]">
                  With an impeccable track record and experience of more than a decade, we stand as guardians of safety, offering a comprehensive suite of security solutions designed to protect you and what matters most to you. With an unwavering commitment to excellence and a dedication to staying ahead of emerging threats, we redefine the standards of security in an ever-evolving world.
                </Typography>
              </div>
              <div className="drawer-right flex flex-col justify-between items-end h-full">
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
                <div className="connect-email">
                  <p className="my-3 text-blue-600">Start a conversation</p>
                  <p>mumbaicitycarewll2012@gmail.com</p>
                  <p>+91 7400 488 233</p>
                </div>
                <div className="connect-address">
                  <p className="my-3 text-blue-600">Visit our office</p>
                  <p>V17, Vaibhav Shopping Center,
                    Goregaon (E),
                    Mumbai - 400065, India</p>
                </div>
                <div className="connect-socials grid grid-cols-2 grid-rows-4">
                  <p className="my-3 text-blue-600 col-span-2">Find us on</p>
                  <div className="facebook flex justify-center items-center">
                    <Button utton className="text-3xl p-0 mx-3"><FaFacebookSquare /></Button>
                    <p>Facebook</p>
                  </div>
                  <div className="facebook flex justify-center items-center">
                    <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaXTwitter/></Button>
                    <p>Twitter</p>
                  </div>
                  <div className="facebook flex justify-center items-center">
                    <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaInstagram /></Button>
                    <p>Instagram</p>
                  </div>
                  <div className="facebook flex justify-center items-center">
                    <Button utton className="text-3xl p-0 mx-3"><FaLinkedin /></Button>
                    <p>Linkdin</p>
                  </div>
                  <div className="facebook flex justify-center items-center">
                    <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaYoutube /></Button>
                    <p>Youtube</p>
                  </div>
                </div>
              </div>
            </div>
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