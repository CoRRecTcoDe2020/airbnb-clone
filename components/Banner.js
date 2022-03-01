import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
              className="select-none"
               src="https://links.papareact.com/0fm"
               layout="fill"
               objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-Poppins">Not sure where to go? Perfect.</p>
                <button className="bg-gradient-to-r text-purple-400 to-red-300  bg-white px-10 py-4 shadow-md rounded-lg font-bold my-3 hover:shadow-x active:scale-90 transition duration-150 hover:rounded-full hover:scale-90">
                    I'm flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;