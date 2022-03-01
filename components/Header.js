import Image from "next/image";
import Link from "next/link";
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    SearchIcon,
    SearchCircleIcon
} from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoGuests] = useState(1);
    const router = useRouter();

    const handleSelect = (ranges) => {
        // console.log(ranges);
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput("");
    };

    const search  = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        });
    };

    const selectionRange  = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    return (
      <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md py-6 md:px-10">
            {/* left */}
        <div 
            className="relative flex items-center h-8 cursor-pointer ml-10 select-none" 
            onClick={() => router.push("/")}>
                <Image
                   src="https://links.papareact.com/qd3"
                   layout="fill"
                   objectFit="contain"
                   objectPosition="left"
                />
        </div>

            {/* Midlle & Search */}
            <div className="flex items-center md:border-2 border-blue-900 rounded-full py-2 font-Poppins">
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-grow bg-transparent text-white outline-none pl-5 w-60 text-sm select-none"
                  type="text"
                  placeholder={placeholder || "Start your search"}
                />
                <SearchIcon
                  className="hidden md:inline-flex h-8 bg-gradient-to-r from-red-600 text-white rounded-full p-2 cursor-pointer md:mx-2 hover:from-red-800 hover:scale-90 transition transform"
                  onClick={search}
                />
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center justify-end  font-Poppins text-white">
                <p className="hidden md:inline hover:bg-gray-800 py-3 px-3 cursor-pointer rounded-full transition transform">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-cente space-x-2 border-2 p-2 cursor-pointer border-blue-900 rounded-full">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-6">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FE595E"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b border-sky-600 mb-4">
                        <h2 className="text-2xl text-sky-500 flex-grow font-semibold font-Poppins">Number of Guests</h2>

                        <UsersIcon className="h-5 mr-1 text-white" />
                        <input
                          value={noOfGuests}
                          onChange={(e) => setNoGuests(e.target.value)}
                           type="number"
                           min={1}
                           className="w-12 pl-2 text-blue-900 bg-gradient-to-br from-slate-400 to-blue-600 rounded-lg outline-none animate-pulse"                            
                           />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-200 hover:shadow-md rounded-lg font-Poppins">Cancel</button>
                        <button onClick={search} className="flex-grow text-gray-200 hover:shadow-md rounded-lg font-Poppins">Search</button>
                    </div>
                </div>
            )}
      </header>
    )
}

export default Header;