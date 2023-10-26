import iconMenu from "../assets/icon-menu.svg";
import logo from "../assets/logoApp.png";
import iphone from "../assets/iphone.png";
import ios from "../assets/icon.png";
import android from "../assets/playstore.png";
import dribble from "../assets/dribble.png";
import youtube from "../assets/youtube.png";
import webflow from "../assets/webflow.png";
import behance from "../assets/behance.png";
import imageSection from "../assets/sectionLeft.png";
import checklist from "../assets/checklist.png";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <div className=" px-3 py-2 flex justify-end tablet:float-none sm:w-full tablet:mx-12 tablet:mt-2">
        <div className="p-3 hover:cursor-pointer tablet:hidden">
          <img src={iconMenu} alt="" className="w-7" />
        </div>
        <div className="hidden tablet:flex tablet:w-full ">
          <div className="flex">
            <div className="flex gap-14">
              <img src={logo} alt="" className=" cursor-pointer" />
              <div className="flex my-auto gap-x-9 font-bold">
                <div className=" cursor-pointer">About Us</div>
                <div className=" cursor-pointer">Career</div>
                <div className=" cursor-pointer">Support</div>
              </div>
            </div>
          </div>
          <div className="my-auto ml-auto">
            <a
              href="#"
              className=" bg-slate-100 text-black px-4 py-2 shadow-[7px_7px_0px_0px_rgb(252,163,17)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className=" tablet:flex">
        <div className="mx-4 tablet:w-full tablet:mx-14 tablet:mt-36 laptop:mt-28">
          <p className="font-bold text-4xl leading-tight laptop:text-5xl laptop:leading-snug">
            Your journey to <br /> better credit <br />{" "}
            <span className="bg-[#FCA311]">Starts here</span>
          </p>
          <p className=" text-xs mt-3">
            Think the credit system is stacked against you? So do we. We&apos;ll
            help you <br /> get the credit you deserve.
          </p>
          <div className=" flex gap-5 mt-3">
            <div className="bg-black flex gap-x-2 w-32 justify-center py-2 laptop:w-36">
              <img src={ios} alt="" className=" w-5 h-5 my-auto" />
              <div className=" text-white">
                <p className=" text-[0.6rem]">Available now</p>
                <p className=" text-sm font-medium">App Store</p>
              </div>
            </div>
            <div className="bg-black flex gap-x-2 w-32 justify-center py-2 laptop:w-36">
              <img src={android} alt="" className=" w-5 h-5 my-auto" />
              <div className=" text-white">
                <p className=" text-[0.6rem]">Available now</p>
                <p className=" text-sm font-medium">Play Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-2 bg-[#14213D] py-4 tablet:w-full">
          <img
            src={iphone}
            alt=""
            className=" w-36 mx-auto tablet:py-14 tablet:w-44 laptop:w-52"
          />
        </div>
      </div>
      {/* section 2 */}
      <div className=" w-full bg-black p-4 grid grid-cols-2 gap-y-4 justify-items-center tablet:grid-cols-4 tablet:py-9 laptop:py-12">
        <img src={dribble} alt="" className=" w-20 tablet:w-28" />
        <img src={youtube} alt="" className=" w-20 tablet:w-28" />
        <img src={webflow} alt="" className=" w-20 tablet:w-28" />
        <img src={behance} alt="" className=" w-20 tablet:w-28" />
      </div>
      {/* section 3 */}
      <div className="  laptop:h-[37rem] laptop:max-h-[37rem] py-2 laptop:py-10 laptop:grid">
      <div className="tablet:grid tablet:grid-cols-2 laptop:my-auto">
        <div className="">
          <img src={imageSection} alt="" className=" w-56 mx-auto tablet:w-72 laptop:w-96" />
        </div>
        <div className=" mx-8 my-4 tablet:my-auto">
          <p className=" text-3xl font-bold laptop:text-5xl">
            Empower Cash <br /> Advance
          </p>
          <div className=" grid gap-y-2 my-4">
            <div className="flex gap-x-2">
              <div className=" bg-[#FCA311] w-6 h-6 rounded-full flex items-center justify-center laptop:my-auto">
                <img src={checklist} alt="" className="" />
              </div>
              <div className="my-auto">
                <p className=" font-semibold text-xs laptop:text-lg">
                  Receive up to $250 today
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className=" bg-[#FCA311] w-6 h-6 rounded-full flex items-center justify-center laptop:my-auto">
                <img src={checklist} alt="" className="" />
              </div>
              <div className="my-auto">
                <p className=" font-semibold text-xs laptop:text-lg">
                  No interest, no late fees, no credit checks
                </p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className=" bg-[#FCA311] w-6 h-6 rounded-full flex items-center justify-center laptop:my-auto">
                <img src={checklist} alt="" className="" />
              </div>
              <div className=" my-auto">
                <p className=" font-semibold text-xs laptop:text-lg">Instant delivery</p>
              </div>
            </div>
            <div className=" mt-4">
            <a
              href="#"
              className=" bg-[#000000] text-white px-4 py-2 shadow-[7px_7px_0px_0px_rgb(252,163,17)]"
            >
              Learn More
            </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* section 4 */}
      <div className=" laptop:h-[37rem] laptop:max-h-[37rem] py-2 laptop:py-10 laptop:grid bg-[#14213D]">
        <div className=" laptop:my-auto"></div>
      </div>
    </div>
  );
};
export default Home;
