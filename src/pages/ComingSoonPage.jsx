import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import CustomCountdown from "../components/CustomCountdown";
import { useEffect, useState } from "react";
import BurgerIcon from "../components/BurgerIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ParticlesLayer from "../components/ParticlesLayer";
import Loader from "react-js-loader";
import '../styles/styles.css'
import emailjs from "@emailjs/browser"

const ComingSoonPage = () => {
  const [open, setOpen] = useState(false);
  const [hamMsg, setHamMsg] = useState("More Info");
  const [fbMsgState, setFbMsgState] = useState(false);
  const [twitterMsgState, setTwitterMsgState] = useState(false);
  const [instagramMsgState, setInstagramMsgState] = useState(false);
  const [linkedinMsgState, setLinkedinMsgState] = useState(false);
  const [youtubeMsgState, setYoutubeMsgState] = useState(false);
  const [loading, setLoading] = useState(true);
  const openDrawer = () => { setOpen(true); setHamMsg("Close") };
  const closeDrawer = () => { setOpen(false); setHamMsg("More Info") };
  const genericHamburgerLine = "h-1 w-6 my-1 rounded-full bg-[#1c75bc] transition ease transform duration-300";
  const [email, setEmail] = useState("")
  const handleDrawer = () => {
    if (open)
      closeDrawer();
    else
      openDrawer();
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const templateParams = {
      to_email: email
    };
    emailjs.send(
      "service_wrp6skq",
      "template_ttffeg5",
      templateParams,
      "6eTpwzF5VSQmoVX5u"
    ).then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      setEmail("")
    }).catch((err) => {
      console.log(err);
    })
  }


  if (!loading)
    return (
      <div className="smMobile:px-1 tablet:p-5 flex justify-center flex-col bg-transparent">
        <ParticlesLayer />
        <div className="cs-top flex justify-between w-full">
          <div className="nav">
            {/* <Button onClick={handelDrawer} className="absolute left-[.5rem] z-[999999] flex gap-3 text-xl bg-transparent border-[1px] border-gray-900 text-blue-600 flex justify-center items-center"> */}
            {/* <RxHamburgerMenu /> */}
            <Button onClick={handleDrawer} className="absolute left-[.5rem] z-[999999] gap-3 text-xl bg-black border-[1px] border-gray-900 text-blue-600 flex justify-center items-center">
              {/* <RxHamburgerMenu /> */}

              <button
                className="flex flex-col h-12 w-12 rounded justify-center items-center group"

              >
                <div
                  className={`${genericHamburgerLine} ${open
                    ? "rotate-45 translate-y-3"
                    : "opacity-100"
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${open
                    ? "-rotate-45 -translate-y-3"
                    : "opacity-100"
                    }`}
                />
              </button>
              <span className="text-sm text-white smMobile:hidden tablet:block">{hamMsg}</span>
            </Button>

            {/* <span className="text-sm text-white">{hamMsg}</span> */}
            {/* </Button> */}
            <Drawer open={open} size={10000} className="bg-black h-full overflow-y-scroll">
              <div className="flex smMobile:flex-col tablet:flex-row items-start justify-between relative pr-[4rem] pt-[4rem] w-full smMobile:w-screen tablet:w-auto">
                <div className="drawer-left  tablet:pt-[5rem] ">
                  <div className="bar w-[4rem] h-[2px] bg-[#ec008c99] absolute left-[4rem] smMobile:top-[10rem] tablet:top-[8rem]"></div>
                  <div className="flex flex-col ml-[4rem] smMobile:mt-[7rem] tablet:mt-0">
                    <h1 className="berbefore text-blue-gray-100 tablet:text-[4rem] smMobile:text-[2rem] max-w-[70%] font-DomineRegular font-light tracking-normal">
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
                <div className="drawer-right smMobile:max-w-[90%] tablet:max-w-full flex flex-col justify-center smMobile:items-center tablet:items-end h-full pt-[5rem]">
                  <div className="connect-mail w-full smMobile:pl-[4rem] tablet:pl-0">
                    <p className="my-3 text-blue-600">Start a conversation</p>
                    <a className="cursor-pointer underline text-blue-400" href="mailto:miteshmccs@gmail.com">miteshmccs@gmail.com</a>
                    <br />
                    <a className="cursor-pointer underline text-blue-400" href="tel:+917400488233">+91 7400 488 233</a>
                  </div>
                  <div className="connect-address w-full smMobile:pl-[4rem] tablet:pl-0 tablet:ml-0">
                    <p className="my-3 text-blue-600">Visit our office</p>
                    <p className="">V17, Vaibhav Shopping Center,
                      Goregaon (E),
                      Mumbai - 400065, India</p>
                  </div>
                  <p className="my-[2rem] text-blue-600 col-span-2 w-full smMobile:pl-[4rem] tablet:pl-0 text-left">Find us on</p>
                  <div className="connect-socials w-full smMobile:pl-[4rem] tablet:pl-0 smMobile:flex smMobile:flex-row flex-wrap tablet:grid gap-[2rem] tablet:grid-cols-2 grid-rows-4 tablet:px-0 tablet:ml-0">
                    <a target="_blank" href="https://m.facebook.com/people/Mumbai-City-Carewell-Utility-Services/100054282966763/" className="facebook flex justify-center items-center">
                      <Button utton className="text-3xl p-0 mx-3 "><FaFacebookSquare /></Button>
                      <p className="smMobile:hidden tablet:block">Facebook</p>
                    </a>
                    <a target="_blank" href="https://twitter.com/MadhukarNa28455" className="facebook flex justify-center items-center">
                      <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaXTwitter /></Button>
                      <p className="smMobile:hidden tablet:block">Twitter</p>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/mccsxguard?igshid=OGQ5ZDc2ODk2ZA==" className="facebook flex justify-center items-center">
                      <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaInstagram /></Button>
                      <p className="smMobile:hidden tablet:block">Instagram</p>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/mumbaicitycarewell/" className="facebook flex justify-center items-center">
                      <Button utton className="text-3xl p-0 mx-3"><FaLinkedin /></Button>
                      <p className="smMobile:hidden tablet:block">Linkdin</p>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/@MCCS2012" className="facebook flex justify-center items-center">
                      {/* <Button utton className="text-3xl p-0 mx-3 bg-transparent"><FaYoutube /></Button> */}
                      <Button utton className="text-3xl p-0 mx-3 bg-transparent"><img src="/favicon.png" className="max-w-[25px]" /></Button>
                      <p className="smMobile:hidden tablet:block">Youtube</p>
                    </a>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>
          <div className="logo bg-logo"></div>
        </div>
        <div className={`cs-main  flex smMobile:flex-col tablet:flex-row justify-around smMobile:items-center tablet:items-start h-full smMobile:p-0 tablet:px-[5rem] transform origin-right ${(open) ? "scale-x-0" : "scale-x-1"} overflow-hidden transition duration-200`}>
          <div className="cs-countdown smMobile:hidden tablet:block relative tablet:my-[5rem]">
            <div className="bar w-[2rem] h-[1px] bg-blue-600 absolute left-[-2.5rem] top-[.7rem]"></div>
            <p className="cs-head uppercase">
              LAUNCHING IN
            </p>
            <CustomCountdown days={10} hours={0} minutes={10} seconds={0} />
          </div>
          <div className="cs-content my-[5rem] tablet:max-w-[50%] smMobile:max-w-[80%] h-full">
            <p className="cs-head uppercase ml-[10%] smMobile:my-[5rem] tablet:m-0 relative">
              <div className="bar w-[2rem] h-[1px] bg-blue-600 absolute top-[50%] left-[-3rem]"></div>
              <span>WELCOME TO MCCS</span>
            </p>
            <p className="text-[3.5rem] text-white font-DomineRegular leading-[4rem] verySmMobile:text-center smMobile:text-left">We are currently working on a new super awesome website.</p>
            <p className="my-[2rem] cs-content verySmMobile:text-center smMobile:text-left">At MCCS, transparency is not just a promise; it's a cornerstone of our service philosophy, reflecting our dedication to keeping you informed and in control of your security solutions.</p>
            <form className="subscribe-email" onSubmit={(e) => handleSubmit(e)}>
              <input type="email" className="px-[2rem] py-[1rem] text-white bg-[#ffffff20] smMobile:w-full smMobile:my-[1rem] mobile:w-auto tablet:my-0" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
              <button type="submit" className="px-[2rem] py-[1rem] bg-blue-600 text-white smMobile:w-full smMobile:my-[1rem] mobile:w-auto tablet:my-0 uppercase tracking-widest">Notify Me</button>
            </form>
          </div>
          <div className="connect-socials flex flex-col gap-[2rem] smMobile:hidden tablet:flex absolute right-[1rem] top-[25%]">
            <a target="_blank" href="https://m.facebook.com/people/Mumbai-City-Carewell-Utility-Services/100054282966763/" className="facebook flex justify-center items-center relative">
              <Button className="text-xl p-0 mx-3" onMouseEnter={() => { setFbMsgState(true) }} onMouseLeave={() => { setFbMsgState(false) }}><FaFacebookSquare /></Button>
              <p className={`absolute text-[#1c75bc] right-[4rem] transition duration-300 ${(fbMsgState) ? "scale-1" : "scale-0"}`} >Facebook</p>
            </a>
            <a target="_blank" href="https://twitter.com/MadhukarNa28455" className="facebook flex justify-center items-center relative">
              <Button className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={() => { setTwitterMsgState(true) }} onMouseLeave={() => { setTwitterMsgState(false) }}><FaXTwitter /></Button>
              <p className={`absolute text-[#1c75bc] right-[4rem] transition duration-300 ${(twitterMsgState) ? "scale-1" : "scale-0"}`} >Twitter</p>
            </a>
            <a target="_blank" href="https://www.instagram.com/mccsxguard?igshid=OGQ5ZDc2ODk2ZA==" className="facebook flex justify-center items-center relative">
              <Button className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={() => { setInstagramMsgState(true) }} onMouseLeave={() => { setInstagramMsgState(false) }}><FaInstagram /></Button>
              <p className={`absolute text-[#1c75bc] right-[4rem] transition duration-300 ${(instagramMsgState) ? "scale-1" : "scale-0"}`} >Instagram</p>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/mumbaicitycarewell/" className="facebook flex justify-center items-center relative">
              <Button className="text-xl p-0 mx-3" onMouseEnter={() => { setLinkedinMsgState(true) }} onMouseLeave={() => { setLinkedinMsgState(false) }}><FaLinkedin /></Button>
              <p className={`absolute text-[#1c75bc] right-[4rem] transition duration-300 ${(linkedinMsgState) ? "scale-1" : "scale-0"}`} >Linkedin</p>
            </a>
            <a target="_blank" href="https://www.youtube.com/@MCCS2012" className="facebook flex justify-center items-center relative">
              {/* <Button className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={() => { setYoutubeMsgState(true) }} onMouseLeave={() => { setYoutubeMsgState(false) }}><FaYoutube /></Button> */}
              <Button className="text-xl p-0 mx-3 bg-transparent" onMouseEnter={() => { setYoutubeMsgState(true) }} onMouseLeave={() => { setYoutubeMsgState(false) }}>
                <img src="/favicon.png" className="max-w-[25px]" />
              </Button>
              <p className={`absolute text-[#1c75bc] right-[4rem] transition duration-300 ${(youtubeMsgState) ? "scale-1" : "scale-0"}`} >Youtube</p>
            </a>
          </div>
          <div className="cs-countdown relative tablet:hidden">
            <div className="bar w-[2rem] h-[1px] bg-blue-600 absolute left-[-2.5rem] top-[.7rem]"></div>
            <p className="cs-head uppercase">
              LAUNCHING IN
            </p>
            <CustomCountdown days={10} hours={0} minutes={10} seconds={0} />
          </div>
        </div>
      </div>
    )
  else {
    return (<div className="smMobile:px-1 tablet:p-5 flex justify-center flex-col bg-transparent h-screen">
      <Loader type="box-rectangular" bgColor="#1c75bc" color="blue" size={100} />
    </div>)
  }
}

export default ComingSoonPage