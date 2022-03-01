import Image from "next/image";

function SmallCard({ img, location, distance }) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-500 bg-gradient-to-r from-slate-600 to-blue-800 hover:scale-105 transition transform duration-200 ease-out">
            {/* Left */}
                <div className="relative h-16 w-16 select-none">
                    <Image
                       className="rounded-lg"
                       src={img}
                       layout="fill"
                    />
               </div>

            {/* Right */}
            <div>
                <h2 className="text-white font-Poppins">{location}</h2>
                <h3 className="text-gray-400 font-Poppins select-none">{distance}</h3>
            </div>
        </div>
    );
}

export default SmallCard;