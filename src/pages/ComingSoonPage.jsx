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
import { CiMenuBurger } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ParticlesLayer from "../components/ParticlesLayer";
import '../styles/styles.css'


const ComingSoonPage = () => {
  const [open, setOpen] = useState(false);
  const [hamMsg, setHamMsg] = useState("More Info");
  const [fbMsgState, setFbMsgState] = useState(false);
  const [twitterMsgState, setTwitterMsgState] = useState(false);
  const [instagramMsgState, setInstagramMsgState] = useState(false);
  const [linkedinMsgState, setLinkedinMsgState] = useState(false);
  const [youtubeMsgState, setYoutubeMsgState] = useState(false);
  const openDrawer = () => { setOpen(true); setHamMsg("Close") };
  const closeDrawer = () => { setOpen(false); setHamMsg("More Info") };
  const handelDrawer = () => {
    if (open)
      closeDrawer();
    else
      openDrawer();
  }
  return (
    <div className="smMobile:px-1 tablet:p-5 flex justify-center flex-col bg-transparent">
      <ParticlesLayer />
      <div className="cs-top flex justify-between w-full">
        <div className="nav">
          <Button onClick={handelDrawer} className="absolute left-[.5rem] z-[999999] flex gap-3 text-xl bg-transparent border-[1px] border-gray-900 text-blue-600">
            <RxHamburgerMenu />
            {/* <BurgerIcon /> */}
            
            <span className="text-sm">{hamMsg}</span>
          </Button>
          <Drawer open={open} size={10000} className="bg-black h-full overflow-y-scroll">
            <div className="flex smMobile:flex-col tablet:flex-row items-start justify-between relative ">
              <div className="drawer-left smMobile:p-[2rem] tablet:pt-[5rem]">
                <div className="bar w-[4rem] h-[2px] bg-[#ec008c99] absolute left-[14rem]"></div>
                <div className="flex flex-col ml-[12rem]">
                  <h1 className="berbefore text-blue-gray-100 text-[5rem] font-DomineRegular font-light tracking-normal">
                    We are MCCS. Mumbai City Carewell Security.
                  </h1>
                  <p color="gray" className="pr-4 w-[75%] cs-content text-[1rem] tracking-wide my-[2rem]">
                    With an impeccable track record and experience of more than a decade, we stand as guardians of safety, offering a comprehensive suite of security solutions designed to protect you and what matters most to you. With an unwavering commitment to excellence and a dedication to staying ahead of emerging threats, we redefine the standards of security in an ever-evolving world.
                  </p>
                  <p color="gray" className="pr-4 w-[75%] cs-content text-[1rem] tracking-wide">
                    By choosing MCCS, you're not just getting a one-size-fits-all solution - you're receiving a bespoke security framework crafted to address your distinct needs, ensuring optimal protection and peace of mind.
                  </p>
                </div>
              </div>
              <div className="drawer-right flex flex-col justify-between smMobile:items-center tablet:items-end h-full pt-[5rem]">
                <div className="connect-email">
                  <p className="my-3 text-blue-600">Start a conversation</p>
                  <p>mumbaicitycarewll2012@gmail.com</p>
                  <p>+91 7400 488 233</p>
                </div>
                <div className="connect-address smMobile:mx-[25%] tablet:mx-auto">
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
      <div className={`cs-main  flex smMobile:flex-col tablet:flex-row justify-around smMobile:items-center tablet:items-start h-full smMobile:p-0 tablet:px-[5rem] transform origin-right ${(open)?"scale-x-0":"scale-x-1"} overflow-hidden transition duration-200`}>
        <div className="cs-countdown smMobile:hidden tablet:block relative tablet:my-[5rem]">
          <div className="bar w-[2rem] h-[1px] bg-blue-600 absolute left-[-2.5rem] top-[.7rem]"></div>
          <p className="cs-head uppercase">
            LAUNCHING IN
          </p>
          <CustomCountdown days={2} hours={5} minutes={30} seconds={15} />
        </div>
        <div className="cs-content my-[5rem] tablet:max-w-[50%] smMobile:max-w-[80%] h-full">
          <p className="cs-head uppercase ml-[10%] smMobile:my-[5rem] tablet:m-0 relative">
            <div className="bar w-[2rem] h-[1px] bg-blue-600 absolute top-[50%] left-[-3rem]"></div>
            <span>WELCOME TO MCCS</span>
          </p>
          <p className="text-[3.5rem] text-white font-DomineRegular leading-[4rem] verySmMobile:text-center smMobile:text-left">We are currently working on a new super awesome website.</p>
          <p className="my-[2rem] cs-content verySmMobile:text-center smMobile:text-left">At MCCS, transparency is not just a promise; it's a cornerstone of our service philosophy, reflecting our dedication to keeping you informed and in control of your security solutions.</p>
          <form className="subscribe-email">
            <input type="email" className="px-[2rem] py-[1rem] text-white bg-[#ffffff20] smMobile:w-full smMobile:my-[1rem] mobile:w-auto tablet:my-0" placeholder="Enter email" />
            <button type="submit" className="px-[2rem] py-[1rem] bg-blue-600 text-white smMobile:w-full smMobile:my-[1rem] mobile:w-auto tablet:my-0">Notify Me</button>
          </form>
        </div>
        <div className="connect-socials flex flex-col gap-[2rem] smMobile:hidden tablet:flex absolute right-[1rem] top-[25%]">
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3" onMouseEnter={()=>{setFbMsgState(true)}} onMouseLeave={()=>{setFbMsgState(false)}}><FaFacebookSquare /></Button>
            <p className={`absolute right-[4rem] transition duration-300 ${(fbMsgState)?"scale-1":"scale-0"}`} >Facebook</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={()=>{setTwitterMsgState(true)}} onMouseLeave={()=>{setTwitterMsgState(false)}}><FaXTwitter /></Button>
            <p className={`absolute right-[4rem] transition duration-300 ${(twitterMsgState)?"scale-1":"scale-0"}`} >Twitter</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={()=>{setInstagramMsgState(true)}} onMouseLeave={()=>{setInstagramMsgState(false)}}><FaInstagram /></Button>
            <p className={`absolute right-[4rem] transition duration-300 ${(instagramMsgState)?"scale-1":"scale-0"}`} >Instagram</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3" onMouseEnter={()=>{setLinkedinMsgState(true)}} onMouseLeave={()=>{setLinkedinMsgState(false)}}><FaLinkedin /></Button>
            <p className={`absolute right-[4rem] transition duration-300 ${(linkedinMsgState)?"scale-1":"scale-0"}`} >Linkdin</p>
          </div>
          <div className="facebook flex justify-center items-center relative">
            <Button utton className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={()=>{setYoutubeMsgState(true)}} onMouseLeave={()=>{setYoutubeMsgState(false)}}><FaYoutube /></Button>
            <p className={`absolute right-[4rem] transition duration-300 ${(youtubeMsgState)?"scale-1":"scale-0"}`} >Youtube</p>
          </div>
        </div>
        <div className="cs-countdown relative tablet:hidden">
          <div className="bar w-[2rem] h-[1px] bg-blue-600 absolute left-[-2.5rem] top-[.7rem]"></div>
          <p className="cs-head uppercase">
            LAUNCHING IN
          </p>
          <CustomCountdown days={2} hours={5} minutes={30} seconds={15} />
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage