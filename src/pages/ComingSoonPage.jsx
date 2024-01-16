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
  const [hamMsg, setHamMsg] = useState("More Info")
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="smMobile:px-1 tablet:p-5 flex items-center flex-col bg-black">
      <div className="cs-top flex justify-between w-full">
        <div className="nav">
          <Button onClick={openDrawer} className="text-xl bg-transparent border-[1px] border-blue-600 text-blue-600">
            {/* <BurgerIcon/> */}

            <RxHamburgerMenu />
          </Button>
          <Drawer open={open} onClose={closeDrawer} size={10000} className="smMobile:py-[1rem] tablet:py-[3rem] tablet:px-[5rem] bg-black">
            <div className="mb-6 flex smMobile:flex-col tablet:flex-row items-center justify-between h-full smMobile:overflow-y-scroll tablet:overflow-hidden">
              <div className="drawer-left smMobile:p-[2rem] tablet:p-0">
                <IconButton variant="text" color="white" className="bg-gray-700 text-white flex my-[5rem] ml-[5%] tablet:hidden" onClick={closeDrawer}>
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
                <div className="bar w-[5rem] h-[2px] bg-[#ec008c99]"></div>
                <Typography variant="h5" className="berbefore text-blue-gray-100 text-[4rem] font-DomineRegular font-light">
                  We are MCCS. Mumbai City Carewell Security.
                </Typography>
                <Typography color="gray" className="mb-8 pr-4 font-MetropolisRegular w-[90%]">
                  With an impeccable track record and experience of more than a decade, we stand as guardians of safety, offering a comprehensive suite of security solutions designed to protect you and what matters most to you. With an unwavering commitment to excellence and a dedication to staying ahead of emerging threats, we redefine the standards of security in an ever-evolving world.
                </Typography>
              </div>
              <div className="drawer-right flex flex-col justify-between smMobile:items-center tablet:items-end h-full">
                <IconButton variant="text" color="white" className="bg-gray-700 min-h-[2rem] smMobile:hidden tablet:block" onClick={closeDrawer}>
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
                <div className="connect-address mx-[25%]">
                  <p className="my-3 text-blue-600">Visit our office</p>
                  <p className="">V17, Vaibhav Shopping Center,
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
                    <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaXTwitter /></Button>
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
        <div className="logo bg-logo"></div>
      </div>
      <div className="cs-main flex smMobile:flex-col tablet:flex-row justify-around items-center h-full w-full">
        <div className="cs-countdown smMobile:hidden tablet:block">
          <span className="bar w-[5rem] h-[2px] bg-[#ec008c99]"></span>
          <p className="font-MetropolisRegular"></p>
          Launching In
          <CustomCountdown days={2} hours={5} minutes={30} seconds={15} />
        </div>
        <div className="cs-content tablet:max-w-[50%] smMobile:max-w-[80%]">
          <p className="cs-head font-MetropolisMedium">
            Welcome to MCCS
          </p>
          <p className="text-[3.5rem] text-white font-DomineRegular">We are currently working on a new super awesome website.</p>
          <p className="my-[3rem]">At MCCS, transparency is not just a promise; it's a cornerstone of our service philosophy, reflecting our dedication to keeping you informed and in control of your security solutions.</p>
          <form className="subscribe-email">
            <input type="email" className="px-[2rem] py-[1rem] text-white bg-[#ffffff20]" placeholder="Enter email"/>
            <button type="submit" className="px-[2rem] py-[1rem] bg-blue-600">Notify Me</button>
          </form>
        </div>
        <div className="connect-socials flex flex-col gap-[2rem]">
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3"><FaFacebookSquare /></Button>
            <p className="absolute right-[4rem] scale-0 transition duration-300">Facebook</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3 bg-transparent"><FaXTwitter /></Button>
            <p className="absolute right-[4rem]">Twitter</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3 bg-transparent"><FaInstagram /></Button>
            <p className="absolute right-[4rem]">Instagram</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3"><FaLinkedin /></Button>
            <p className="absolute right-[4rem]">Linkdin</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3 bg-transparent"><FaYoutube /></Button>
            <p className="absolute right-[4rem]">Youtube</p>
          </div>
        </div>
        <div className="cs-countdown tablet:hidden">
          Launching In
          <CustomCountdown days={2} hours={5} minutes={30} seconds={15} />
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage