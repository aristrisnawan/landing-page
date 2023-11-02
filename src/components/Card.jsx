import avatar1 from "../assets/avatar1.jpg";

const Card = () => {
    return(
        <div className=" w-32 h-32 bg-white flex flex-col laptop:w-48 laptop:h-48">
            <p className=" text-xs p-2 line-clamp-4 tablet:line-clamp-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </p>
            <div className=" flex my-auto mx-2">
              <div className=" h-8 w-8 rounded-full">
                <img src={avatar1} alt="" className=" rounded-full w-full"/>
              </div>
              <div className=" ml-2">
                <p className=" text-xs font-semibold">Vineet</p>
                <p className=" text-[0.5rem] text-gray-400">Web Designer</p>
              </div>
            </div>
          </div>
    )
}
export default Card;