import iconMenu from "../assets/icon-menu.svg"
import logo from "../assets/logoApp.png"
import iphone from "../assets/iphone.png"
import ios from "../assets/icon.png"
import android from "../assets/playstore.png"

const Home = () => {
    return (
        <div>
            {/* Header */}
            <div className=" px-3 py-2 flex justify-end tablet:float-none sm:w-full tablet:mx-12 tablet:fixed tablet:w-full tablet: mt-2">
                <div className="p-3 hover:cursor-pointer tablet:hidden">
                    <img src={iconMenu} alt="" className="w-7"/>
                </div>
                <div className="hidden tablet:flex tablet:w-full ">
                    <div className="flex">
                        <div className="flex gap-14">
                            <img src={logo} alt="" />
                            <div className="flex my-auto gap-x-9 font-bold">
                                <div>About Us</div>
                                <div>Career</div>
                                <div>Support</div>
                            </div>
                        </div>
                    </div>
                    <div className="my-auto ml-auto tablet:mr-24">
                        <a href="#" className=" bg-white text-black px-4 py-2 shadow-[10px_10px_0px_0px_rgb(252,163,17)]">Get Started</a>
                    </div>
                </div>
            </div>
            {/* section 1 */}
            <div className=" tablet:flex">
                <div className="mx-4 tablet:w-full tablet:mx-14 tablet:mt-36">
                    <p className="font-bold text-4xl leading-tight">Your journey to <br/> better credit <br/> <span className="bg-[#FCA311]">Starts here</span></p>
                    <p className=" text-xs mt-3">Think the credit system is stacked against you? So do we. We&apos;ll help you <br/> get the credit you deserve.</p>
                    <div className=" flex gap-5 mt-3">
                        <div className="bg-black flex gap-x-2 w-28 justify-center py-2 laptop:w-36">
                            <img src={ios} alt=""  className=" w-5 h-5 my-auto"/>
                            <div className=" text-white">
                                <p className=" text-[0.6rem]">Available now</p>
                                <p className=" text-sm font-medium">App Store</p>
                            </div>
                        </div>
                        <div className="bg-black flex gap-x-2 w-28 justify-center py-2 laptop:w-36">
                            <img src={android} alt=""  className=" w-5 h-5 my-auto"/>
                            <div className=" text-white">
                                <p className=" text-[0.6rem]">Available now</p>
                                <p className=" text-sm font-medium">Play Store</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-2 bg-[#14213D] py-4 tablet:w-full">
                    <img src={iphone} alt="" className=" w-36 mx-auto tablet:py-14 tablet:w-44 laptop:w-52"/>
                </div>
            </div>
        </div>
    )
}
export default Home;