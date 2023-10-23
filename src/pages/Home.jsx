import iconMenu from "../assets/icon-menu.svg"
import logo from "../assets/logoApp.png"
import iphone from "../assets/iphone.png"

const Home = () => {
    return (
        <div>
            {/* Header */}
            <div className=" px-3 py-2 flex justify-end tablet:float-none sm:w-full tablet:mx-12">
                <div className="p-3 hover:cursor-pointer tablet:hidden">
                    <img src={iconMenu} alt="" className="w-7"/>
                </div>
                <div className="hidden tablet:flex tablet:w-full tablet:bg-red-700">
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
                    <div className="my-auto ml-auto">
                        <a href="#" className=" bg-white text-black px-4 py-2 shadow-[10px_10px_0px_0px_rgb(252,163,17)]">Get Started</a>
                    </div>
                </div>
            </div>
            {/* section 1 */}
            <div>
                <div className="mx-4">
                    <p className="font-bold text-4xl leading-tight">Your journey to better credit <span className="bg-[#FCA311]">Starts here</span></p>
                    <p className=" text-xs mt-3">Think the credit system is stacked against you? So do we. We&apos;ll help you get the credit you deserve.</p>
                </div>
                <div className=" mt-2 bg-[#14213D] py-4">
                    <img src={iphone} alt="" className=" w-36 mx-auto"/>
                </div>
            </div>
        </div>
    )
}
export default Home;